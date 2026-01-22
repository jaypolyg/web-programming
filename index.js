const fs = require("fs");
const path = require("path");
const express = require("express");
const mongoose = require('mongoose');
const Recipe = require("./models/Recipe");
const seedRecipes = require("./models/recipe-details");
const User = require("./models/user");
const Review = require("./models/review");
const session = require('express-session');
const multer = require('multer');
const port = 3000;

const app = express(); // create express app

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

function requireLogin(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        res.redirect('/');
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']; // only images
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, GIF, and WebP allowed.'), false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5mb max file size
    },
    fileFilter: fileFilter
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, '/public'))); // static files


// Connect to MongoDB
mongoose.connect('mongodb://mongodb:27017/recipehub')
    .then(() => {
        console.log('Connected to MongoDB');
        seedDatabase();
    })
    .catch(err => console.error('Could not connect to MongoDB', err)
);

async function seedDatabase() {
    try {
        const count = await Recipe.countDocuments();
        
        if (count === 0) {
            await Recipe.insertMany(seedRecipes);
            console.log('Database seeded');
        } else {
            console.log('Database already has data, skipping seed');
        }
    } catch (error) {
        console.error("Error seeding database:", error);
    }
}

app.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.sendFile('index.html', { root: './views' });
    } catch (error) {
        res.status(500).send('Error loading recipes');
    }
});

app.get('/home', requireLogin, (req, res) => {
    res.sendFile('home.html', { root: './views' });
});

app.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: 'Error loading recipes' });
    }
});

app.get('/recipes/:id', requireLogin, async (req, res) => {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    res.render('recipe', { recipe });
});

app.get('/signup', (req, res) => {
    res.sendFile('signup.html', { root: './views' });
});

app.post('/api/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        
        const user = new User({ username, email, password });
        await user.save();
        
        req.session.userId = user._id;
        req.session.username = user.username;
        
        res.json({ success: true, userId: user._id });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        
        if (user) {
            req.session.userId = user._id;
            req.session.username = user.username;
            res.json({ success: true, username: user.username, userId: user._id });
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('/api/recipes/:id/reviews', async (req, res) => {
    try {
        const reviews = await Review.find({ recipe: req.params.id }).populate('user', 'username');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Error loading reviews' });
    }
});

app.post('/api/recipes/:id/reviews', upload.single('image'), async (req, res) => {
    try {
        const { userId, text, rating } = req.body;
        
        const review = new Review({
            text,
            rating,
            user: userId,
            recipe: req.params.id,
            image: req.file ? '/uploads/' + req.file.filename : null
        });
        
        await review.save();
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Error adding review' });
    }
});

app.post('/api/upload', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        res.json({ 
            success: true, 
            path: '/uploads/' + req.file.filename 
        });
    } catch (error) {
        res.status(500).json({ error: 'Error uploading file' });
    }
});

app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({ error: 'File too large. Max 5MB allowed.' });
        }
    }
    if (err.message.includes('Invalid file type')) {
        return res.status(400).json({ error: err.message });
    }
    next(err);
});

app.listen(
    port,
    () => {
        console.log("listening to port: " + port);
    }
);

