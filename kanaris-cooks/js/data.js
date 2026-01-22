const recipes = [
    {
    id: 1,
    title: "Smashed Beef Kebabs with Yogurt Sauce",
    cuisine: "Mediterranean",
    author: "Andreas Kanaris",
    description: "Pan-seared beef patties seasoned with warm spices and served with a cooling yogurt and cucumber sauce.",
    cookTime: "30 minutes",
    ingredients: [
      "Ground beef",
      "Garlic",
      "Cumin",
      "Paprika",
      "Greek yogurt",
      "Cucumber"
    ],
    instructions: [
      "Season beef with spices and garlic.",
      "Form into loose patties and sear until browned.",
      "Grate cucumber and mix with yogurt.",
      "Serve kebabs topped with yogurt sauce."
    ],
    dietary: ["Gluten-Free"],
    rating: 4.8,
    notes: "Pairs well with flatbread or lemon rice.",
    image: "",
    date: "2025-01-10"
  },

  {
    id: 2,
    title: "Creamy Tomato Spaghetti with Preserved Lemon",
    cuisine: "Italian",
    author: "Andreas Kanaris",
    description: "Silky tomato pasta brightened with citrus and finished with cream.",
    cookTime: "25 minutes",
    ingredients: [
      "Spaghetti",
      "Canned tomatoes",
      "Heavy cream",
      "Preserved lemon",
      "Olive oil"
    ],
    instructions: [
      "Boil pasta until al dente.",
      "Simmer tomatoes with olive oil.",
      "Stir in cream and lemon.",
      "Toss pasta with sauce and serve."
    ],
    dietary: ["Vegetarian"],
    rating: 4.6,
    notes: "A little lemon goes a long way.",
    image: "",
    date: "2025-01-12"
  },

  {
    id: 3,
    title: "Slow Cooker Garlic Butter Chicken",
    cuisine: "American",
    author: "Andreas Kanaris",
    description: "Tender chicken cooked low and slow in a rich garlic butter sauce.",
    cookTime: "4 hours",
    ingredients: [
      "Chicken thighs",
      "Butter",
      "Garlic",
      "Chicken broth"
    ],
    instructions: [
      "Add all ingredients to slow cooker.",
      "Cook on low until chicken is tender.",
      "Spoon sauce over chicken before serving."
    ],
    dietary: [],
    rating: 4.9,
    notes: "Great for meal prep or leftovers.",
    image: "",
    date: "2025-01-14"
  },

  {
    id: 4,
    title: "German Pancake",
    cuisine: "Breakfast",
    author: "Andreas Kanaris",
    description: "An oven-baked pancake that puffs dramatically and settles into a custardy center.",
    cookTime: "35 minutes",
    ingredients: [
      "Eggs",
      "Milk",
      "Flour",
      "Butter"
    ],
    instructions: [
      "Heat butter in oven-safe skillet.",
      "Blend batter until smooth.",
      "Pour into hot pan and bake.",
      "Serve with powdered sugar or fruit."
    ],
    dietary: ["Vegetarian"],
    rating: 4.7,
    notes: "Serve immediately for best texture.",
    image: "",
    date: "2025-01-16"
  },

  {
    id: 5,
    title: "Easy Chicken Tacos",
    cuisine: "Mexican",
    author: "Andreas Kanaris",
    description: "Weeknight-friendly tacos with seasoned chicken and simple toppings.",
    cookTime: "20 minutes",
    ingredients: [
      "Chicken breast",
      "Chili powder",
      "Cumin",
      "Tortillas"
    ],
    instructions: [
      "Season and cook chicken.",
      "Slice into strips.",
      "Assemble tacos with desired toppings."
    ],
    dietary: [],
    rating: 4.5,
    notes: "Add avocado or lime crema.",
    image: "",
    date: "2025-01-18"
  },

  {
    id: 6,
    title: "Lemony Lentil Soup",
    cuisine: "Mediterranean",
    author: "Andreas Kanaris",
    description: "A comforting lentil soup finished with lemon for brightness.",
    cookTime: "45 minutes",
    ingredients: [
      "Lentils",
      "Onion",
      "Garlic",
      "Lemon"
    ],
    instructions: [
      "Simmer lentils with aromatics.",
      "Cook until tender.",
      "Finish with lemon juice and olive oil."
    ],
    dietary: ["Vegan", "Gluten-Free"],
    rating: 4.6,
    notes: "Even better the next day.",
    image: "",
    date: "2025-01-19"
  },

  {
    id: 7,
    title: "Roasted Salmon with Miso Glaze",
    cuisine: "Japanese",
    author: "Andreas Kanaris",
    description: "Oven-roasted salmon brushed with a savory miso glaze.",
    cookTime: "20 minutes",
    ingredients: [
      "Salmon fillets",
      "White miso",
      "Soy sauce",
      "Honey"
    ],
    instructions: [
      "Mix miso glaze.",
      "Brush salmon generously.",
      "Roast until flaky."
    ],
    dietary: ["Gluten-Free"],
    rating: 4.8,
    notes: "Serve with rice and greens.",
    image: "",
    date: "2025-01-20"
  },

  {
    id: 8,
    title: "Crispy Tofu Stir-Fry",
    cuisine: "Asian",
    author: "Andreas Kanaris",
    description: "Golden tofu tossed with vegetables in a savory sauce.",
    cookTime: "30 minutes",
    ingredients: [
      "Firm tofu",
      "Soy sauce",
      "Vegetables",
      "Sesame oil"
    ],
    instructions: [
      "Pan-fry tofu until crisp.",
      "Stir-fry vegetables.",
      "Combine with sauce and tofu."
    ],
    dietary: ["Vegan"],
    rating: 4.4,
    notes: "Press tofu well for best texture.",
    image: "",
    date: "2025-01-22"
  },

  {
    id: 9,
    title: "Classic Chocolate Chip Cookies",
    cuisine: "Dessert",
    author: "Andreas Kanaris",
    description: "Chewy-centered cookies with crisp edges and melted chocolate.",
    cookTime: "25 minutes",
    ingredients: [
      "Flour",
      "Butter",
      "Sugar",
      "Chocolate chips"
    ],
    instructions: [
      "Cream butter and sugar.",
      "Mix in dry ingredients.",
      "Bake until golden."
    ],
    dietary: ["Vegetarian"],
    rating: 4.9,
    notes: "Chill dough for thicker cookies.",
    image: "",
    date: "2025-01-24"
  },

  {
    id: 10,
    title: "Sheet-Pan Sausage and Vegetables",
    cuisine: "European",
    author: "Andreas Kanaris",
    description: "A one-pan meal of roasted sausage and seasonal vegetables.",
    cookTime: "40 minutes",
    ingredients: [
      "Sausage",
      "Potatoes",
      "Bell peppers",
      "Olive oil"
    ],
    instructions: [
      "Toss everything with oil.",
      "Roast until browned.",
      "Serve hot."
    ],
    dietary: [],
    rating: 4.5,
    notes: "Swap vegetables based on season.",
    image: "",
    date: "2025-01-26"
  }
];
