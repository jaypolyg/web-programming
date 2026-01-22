const seedRecipes = [
    {
        name: "Beef Wellington",
        description: "The immaculate recipe that needs no introduction",
        image: "/images/beef-wellington.jpg",
        prepTime: "1 hour + chilling",
        cookTime: "45 minutes",
        servings: "6-8 servings",
        
        ingredientSections: [
            {
                title: "For the Beef:",
                items: [
                    "900g beef tenderloin, center cut",
                    "Salt and freshly ground black pepper",
                    "2 tbsp vegetable oil"
                ]
            },
            {
                title: "For the Mushroom Duxelles:",
                items: [
                    "450g mixed mushrooms (cremini, shiitake), finely chopped",
                    "45g unsalted butter",
                    "2 shallots, minced",
                    "3 cloves garlic, minced",
                    "2 sprigs fresh thyme, leaves picked",
                    "60g Cognac or brandy",
                    "45g heavy cream",
                    "Salt and pepper to taste"
                ]
            },
            {
                title: "For Assembly:",
                items: [
                    "8-10 slices prosciutto",
                    "1 sheet puff pastry (thawed if frozen)",
                    "2 tbsp Dijon mustard",
                    "1 egg, beaten (for egg wash)",
                    "Flour for dusting"
                ]
            }
        ],
        
        steps: [
            "Season the beef tenderloin liberally with salt and pepper. Heat oil in a large skillet over high heat until smoking.",
            "Sear the beef on all sides until deeply browned, about 2 minutes per side. Remove and brush with Dijon mustard. Let cool completely.",
            "Make the duxelles: In a large pan, melt butter over medium heat. Add shallots and cook until soft, about 3 minutes.",
            "Add mushrooms, garlic, and thyme. Cook for 15-20 minutes, stirring frequently, until all moisture has evaporated and the mixture is paste-like.",
            "Add Cognac and cook until evaporated. Stir in heavy cream and cook until absorbed. Season with salt and pepper. Let cool completely.",
            "Lay out a large sheet of plastic wrap. Arrange prosciutto slices in an overlapping pattern, creating a rectangle.",
            "Spread the cooled mushroom duxelles evenly over the prosciutto.",
            "Place the cooled beef tenderloin at the bottom edge. Using the plastic wrap, tightly roll the prosciutto and mushrooms around the beef.",
            "Twist the ends of the plastic wrap to seal tightly. Refrigerate for at least 30 minutes or up to 24 hours.",
            "On a floured surface, roll out puff pastry to a rectangle large enough to wrap the beef.",
            "Unwrap the beef from plastic and place it in the center of the pastry. Brush edges with egg wash.",
            "Fold the pastry over the beef, trimming excess and sealing the edges. Place seam-side down on a parchment-lined baking sheet.",
            "Brush the entire surface with egg wash. Use a knife to score a decorative pattern on top. Refrigerate for 15 minutes.",
            "Preheat oven to 220°C.",
            "Bake for 35-45 minutes until the pastry is golden brown and the internal cooking is medium-rare.",
            "Let rest for 10 minutes before slicing into thick pieces."
        ],
        
        proTip: "The key to avoiding a soggy bottom is ensuring both the beef and mushroom duxelles are completely cooled before assembly.",
        
        storage: "Beef Wellington is best enjoyed fresh from the oven. Leftover slices can be stored in the refrigerator for up to 2 days and gently reheated in a 350°F oven.",
        
        author: "Chef Gordon",
        difficulty: "Hard",
        rating: 5.0,
        cuisine: "British/French",
        category: "Main Course"
    },
    {
        name: "Chicken Parmesan",
        description: "The Italian-American restaurant classic",
        image: "/images/chicken-parmesan.jpg",
        prepTime: "20 minutes",
        cookTime: "25 minutes",
        servings: "4 servings",
        
        ingredientSections: [
            {
                title: "For the Chicken:",
                items: [
                    "4 large chicken breasts (about 900 g total)",
                    "Kosher salt and freshly ground black pepper"
                ]
            },
            {
                title: "For the Breading Station:",
                items: [
                    "120 g all-purpose flour",
                    "2.5 g garlic powder",
                    "2.5 g dried oregano",
                    "2.5 g dried basil",
                    "Freshly ground black pepper",
                    "3 large eggs, beaten",
                    "15 g all-purpose flour (for egg wash)",
                    "100 g panko breadcrumbs",
                    "50 g grated Parmesan cheese"
                ]
            },
            {
                title: "For Assembly:",
                items: [
                    "Vegetable oil for frying (about 2.5 cm deep)",
                    "480 g marinara or tomato sauce",
                    "225 g fresh mozzarella, sliced",
                    "50 g grated Parmesan cheese",
                    "Fresh basil leaves for garnish",
                    "Cooked pasta for serving"
                ]
            }
        ],
        
        steps: [
            "Butterfly the chicken breasts and pound them to an even 1.25 cm thickness between two sheets of plastic wrap.",
            "Season both sides of the chicken with salt and pepper. Set aside on a baking sheet.",
            "Set up your breading station: In the first bowl, combine flour with garlic powder, oregano, basil, and black pepper. In the second bowl, beat eggs with a sprinkle of flour. In a third shallow dish, mix panko breadcrumbs with grated Parmesan.",
            "Bread each chicken breast using the 'dry hand, wet hand' method: Dip in flour, then egg wash, then panko mixture, pressing firmly to adhere.",
            "For extra crispy coating, dip back into the egg wash and then into the panko again.",
            "Heat about 2.5 cm of vegetable oil in a large skillet to 175°C.",
            "Fry the breaded chicken in batches (don't crowd the pan) for 4-5 minutes per side until golden brown and cooked through (internal temperature 74°C).",
            "Transfer fried chicken to a wire rack set over a baking sheet.",
            "Preheat your broiler.",
            "Top each piece of fried chicken with a generous spoonful of marinara sauce, then slices of fresh mozzarella, and a sprinkle of Parmesan.",
            "Place under the broiler for 2-3 minutes until the cheese is melted and bubbly with golden spots.",
            "Serve immediately over cooked pasta with extra marinara sauce and fresh basil."
        ],
        
        proTip: "The double-breading (dipping in egg and panko twice) creates an extra crispy crust that stays crunchy even under the sauce and cheese. Don't skip pounding the chicken to even thickness—it ensures even cooking!",
        
        storage: "Leftover chicken parmesan can be stored in an airtight container in the refrigerator for up to 3 days. Reheat in a 175°C oven until warmed through. The breaded chicken can be frozen before frying for up to 2 months.",
        
        author: "Chef Tony",
        difficulty: "Easy",
        rating: 4.7,
        cuisine: "Italian-American",
        category: "Main Course"
    },
    {
        name: "Classic Burger, American Style",
        description: "The legendary classic for a reason, an American burger",
        image: "/images/classic-burger.jpg",
        prepTime: "20 minutes",
        cookTime: "10 minutes",
        servings: "4 burgers",
        
        ingredientSections: [
            {
                title: "For the Patties:",
                items: [
                    "450g chuck steak",
                    "450g bone-in short ribs",
                    "2 tsp MSG",
                    "Salt and pepper to taste",
                    "2 tbsp vegetable oil"
                ]
            },
            {
                title: "For Assembly:",
                items: [
                    "4 sesame seed buns",
                    "4 slices yellow American cheese",
                    "Shredded iceberg lettuce",
                    "1 to 2 small vidalia onion, sliced thinly",
                    "1 tomato, sliced thinly",
                    "1 large dill pickle, sliced",
                    "Ketchup to taste",
                    "Mustard to taste"
                ]
            }
        ],
        
        steps: [
            "Trim and cut beef into 1-inch pieces. Spread evenly on a parchment-lined baking sheet and freeze for 15 minutes along with the food processor blade.",
            "Pulse the chilled beef in the food processor until ground and pebbly in texture.",
            "Shape the ground beef into 4 equal patties.",
            "Season both sides generously with salt, pepper, and MSG.",
            "Heat vegetable oil in a large cast iron skillet over medium-high heat until barely smoking.",
            "Add patties and reduce heat to medium. Cook for 3-4 minutes per side for medium doneness.",
            "During the last minute of cooking, place a slice of cheese on each patty to melt.",
            "Toast the buns in the remaining burger fat in the pan.",
            "Let patties rest for 2 minutes.",
            "Assemble in proper and enjoy!"
        ],
        
        proTip: "The MSG is mandatory for this recipe, we dont make the rules. For an extra touch, you can grind dried shiitake mushrooms and nori into a powder and dust the finished burger with it.",
        
        storage: "Uncooked burger patties can be frozen for up to 3 months. Thaw in the refrigerator before cooking.",
        
        author: "Chef Bobby",
        difficulty: "Easy",
        rating: 4.8,
        cuisine: "American",
        category: "Main Course"
    },
    {
        name: "Crème Brûlée",
        description: "The French masterpiece",
        image: "/images/creme-brulee.jpg",
        prepTime: "20 minutes",
        cookTime: "30 minutes + 3h chilling",
        servings: "6 ramekins",
        
        ingredientSections: [
            {
                title: "For the Custard:",
                items: [
                    "720g heavy cream",
                    "1 vanilla bean split",
                    "5 egg yolks",
                    "100g sugar + more for topping",
                    "⅛ teaspoon salt"
                ]
            }
        ],
        
        steps: [
            "Preheat the oven to 325F.",
            "In a small saucepan, bring the cream and vanilla bean and seeds to a simmer over medium heat. Remove from heat and let stand for 15 minutes.",
            "Strain through a fine mesh sieve into a bowl. Discard any solids and the vanilla bean pod.",
            "In a large bowl, whisk together the egg yolks, sugar, and salt. Slowly whisk the hot cream into the egg yolks. Strain the custard through a fine mesh sieve and discard any solids caught by the sieve.",
            "Place 6 ramekins in a large baking dish and divide the custard among them. Very carefully pour boiling water into the baking dish until it comes about halfway up the sides of the ramekins.",
            "Bake for 30 to 40 minutes or until the custard edges are set, but the center wobbles slightly when gently shaken. Remove from the oven and let cool completely in the water bath. Remove the ramekins from the water and chill for several hours. The custards can also be loosely covered and refrigerated for up to 2 days before topping and serving.",
            "When ready to serve, sprinkle sugar evenly over the top of each chilled custard. Using a blow torch or the oven's broiler, caramelize the sugar until dark amber and bubbling. Serve immediately."
        ],
        
        proTip: "Move the torch in circular motions and keep it moving to avoid burning spots. The sugar should bubble and turn a deep amber color. Let it cool completely before serving for that signature crack!",
        
        storage: "The uncaramelized custards can be refrigerated for up to 2 days. Only torch the sugar tops just before serving for the best texture. Once torched, serve within 1 hour.",
        
        author: "Chef Pierre",
        difficulty: "Medium",
        rating: 4.9,
        cuisine: "French",
        category: "Dessert"
    },
    {
        name: "Chocolate Lava Cakes",
        description: "The molten masterpiece",
        image: "/images/lava-cakes.jpg",
        prepTime: "13 minutes",
        cookTime: "8 minutes",
        servings: "6 cakes",
        
        ingredientSections: [
            {
                title: "For the Cake Batter:",
                items: [
                    "160g dark chocolate",
                    "113g unsalted butter",
                    "2 large eggs",
                    "2 large egg yolks",
                    "50g granulated sugar",
                    "⅛ teaspoon salt",
                    "2 tablespoons all-purpose flour"
                ]
            }
        ],
        
        steps: [
            "Preheat the oven to 450F. Butter and lightly flour 6 (4- to 5-ounce) ramekins and place them on a baking sheet.",
            "Combine the butter and chocolate in a double boiler and melt over low heat, stirring until smooth. Or, place the butter and chocolate in a microwave-safe bowl and microwave on high, stirring every 30-seconds until melted. Whisk together until smooth.",
            "In a large mixing bowl, combine the eggs, egg yolks, sugar, and salt. Beat on medium speed until thick and pale yellow. Fold the chocolate mixture and flour into the egg mixture until well combined. Divide the batter among the prepared ramekins.",
            "Bake for 6 to 8 minutes or until the sides of the cakes are firm set but the center is jiggly. Let the cakes cool in the ramekins for 1 minute.",
            "Place a small dessert plate over the top of each ramekin and carefully turn it over, inverting the cake onto the plate. Let stand for about 10 seconds, then remove the ramekin to unmold the cakes. Sift powdered sugar on top and garnish with berries, if desired. Serve immediately."
        ],
        
        proTip: "The key is timing - underbake slightly so the center stays molten. The unbaked batter can be refrigerated for up to 24 hours, just add 1-2 extra minutes to baking time if baking from cold.",
        
        storage: "These are best served immediately. The unbaked, filled ramekins can be covered and refrigerated for up to 24 hours before baking. Frozen ganache can be made a week in advance.",
        
        author: "Chef Jean-Georges",
        difficulty: "Medium",
        rating: 4.9,
        cuisine: "French",
        category: "Dessert"
    },
    {
        name: "Pasta Aglio e Olio",
        description: "Simple ingredients, incredible flavor",
        image: "/images/aglio-olio.jpg",
        prepTime: "5 minutes",
        cookTime: "15 minutes",
        servings: "2 servings",
        
        ingredientSections: [
            {
                title: "Ingredients:",
                items: [
                    "250g dry linguine or spaghetti",
                    "½ head garlic, cloves separated and peeled",
                    "100g high-quality extra virgin olive oil",
                    "1 tsp red pepper flakes",
                    "1 bunch fresh parsley, leaves picked and finely chopped",
                    "½ lemon, juiced",
                    "Kosher salt to taste",
                    "Freshly ground black pepper to taste",
                    "Parmesan cheese for serving"
                ]
            }
        ],
        
        steps: [
            "Bring a large pot of heavily salted water to a boil. Cook pasta until al dente, slightly underdone.",
            "While the pasta cooks, thinly slice the garlic cloves and set aside.",
            "Pick parsley leaves from stems and finely chop. Set aside.",
            "Heat olive oil in a large sauté pan over medium heat until barely shimmering.",
            "Add sliced garlic and cook, stirring constantly, until softened and just turning golden on the edges. Do not let it brown too much or it will become bitter.",
            "Add red pepper flakes and stir for 10 seconds.",
            "Remove pan from heat momentarily.",
            "Reserve ¼ cup of pasta cooking water, then drain the pasta.",
            "Add the drained pasta directly to the pan with the garlic oil.",
            "Add the reserved pasta water, lemon juice, and chopped parsley.",
            "Toss everything together vigorously over medium-low heat for 1-2 minutes until the pasta absorbs the flavors and the sauce emulsifies.",
            "Season with salt and freshly ground black pepper to taste.",
            "Serve immediately, optionally topped with freshly grated Parmesan."
        ],
        
        proTip: "The key is to barely toast the garlic - you want it golden and fragrant, not browned. The pasta water is crucial for creating the silky sauce that coats every strand. This dish is all about timing and technique!",
        
        storage: "This dish is best enjoyed immediately while hot and fresh. Leftovers can be stored in the refrigerator for up to 2 days, but the magic is definitely in eating it right away.",
        
        author: "Chef Marco",
        difficulty: "Easy",
        rating: 4.8,
        cuisine: "Italian",
        category: "Main Course"
    },
    {
        name: "Confit Byaldi (Ratatouille)",
        description: "The stunning classic French vegetable dish",
        image: "/images/ratatouille.jpg",
        prepTime: "30 minutes",
        cookTime: "90 minutes",
        servings: "6 servings",
        
        ingredientSections: [
            {
                title: "For the Sauce:",
                items: [
                    "6 large roma tomatoes",
                    "2 whole red bell peppers, seeded",
                    "100g vegetable stock",
                    "2 sprigs rosemary, picked",
                    "2 sprigs thyme, picked",
                    "1 clove garlic",
                    "½ small onion",
                    "3 tbsp olive oil",
                    "2 tbsp paprika",
                    "2 tbsp turmeric"
                ]
            },
            {
                title: "For the Vegetables:",
                items: [
                    "2 medium green zucchini",
                    "2 medium yellow squash",
                    "2 medium Japanese eggplants",
                    "6 roma tomatoes",
                    "1 tsp kosher salt",
                    "1 tsp freshly ground pepper",
                    "2 tbsp olive oil",
                    "Fresh parsley, torn"
                ]
            }
        ],
        
        steps: [
            "Blanch 6 tomatoes in boiling water for 30 seconds, then place in ice water. Peel the skins off.",
            "Roast the bell peppers over an open flame until blackened on all sides. Wrap in foil and let steam for 5 minutes, then peel off the blackened skin.",
            "Blend the peeled tomatoes, roasted peppers, parsley, garlic, thyme, and onion. Slowly add vegetable stock while blending, then drizzle in olive oil until the sauce is smooth and golden.",
            "Pour the sauce into a large oven-safe pan and spread evenly.",
            "Slice the zucchini, yellow squash, eggplants, and remaining tomatoes into very thin rounds.",
            "Arrange the vegetable slices in alternating patterns in a spiral from the outside edge to the center, overlapping each slice.",
            "Drizzle the vegetables with olive oil and season with salt, pepper, and fresh rosemary.",
            "Cover with parchment paper and bake at 135°C for 90 minutes.",
            "Remove the parchment and bake for an additional 20 minutes until the vegetables are tender and slightly caramelized."
        ],
        
        proTip: "Use a mandoline for perfectly uniform slices. If you want the dish to pack an extra kick add about 2 tbsp of chilli flakes and 1 tbsp of high quality cumin powder.",
        
        storage: "Store ratatouille in an airtight container in the refrigerator for up to 4 days. Reheat gently in the oven at 150°C. This dish actually tastes better the next day as the flavors meld together.",
        
        author: "Chef Thomas Keller",
        difficulty: "Medium",
        rating: 4.9,
        cuisine: "French",
        category: "Main Course"
    },
    {
        name: "Perfected Brownies",
        description: "The perfect Brownies, made from 7+ years of constant improvement",
        image: "/images/brownies.jpg",
        prepTime: "10 minutes",
        cookTime: "18 minutes",
        servings: "~15 pieces",
        
        ingredientSections: [
            {
                title: "Ingredients:",
                items: [
                    "337g all-purpose flour",
                    "20g baking powder",
                    "1.5 tsp salt",
                    "225g butter, melted",
                    "445g granulated sugar",
                    "4 large eggs, beaten",
                    "4 to 5 tsp vanilla extract or 20g vanilla powder",
                    "220g dark cocoa powder"
                ]
            }
        ],
        
        steps: [
            "Preheat your oven to 200°C.",
            "Melt your butter and add it to the sugar, mix until the sugar has fully melted.",
            "Add the cocoa powder as well as the beaten eggs and mix until fully incorporated.",
            "Add the vanilla and the salt, mix for a bit then add the baking powder with the flour.",
            "Mix until the flour is incorporated and add to a buttered baking sheet.",
            "Bake at 200°C for 18 minutes and let it rest for at least 10 minutes."
        ],
        
        proTip: "A salted caramel gloss is greatly recommended. To make it heat 160 grams of sugar with 50 grams of salted butter until it begins to deeply caramelize. Kill the heat and add 80g of heavy cream and one teaspoon of vanilla extract.",
        
        storage: "Store Brownies in an airtight container at room temperature or the fridge for up to 6 days. It is not recommended to freeze the dough for later use.",
        
        author: "Home Chef",
        difficulty: "Easy",
        rating: 5.0,
        cuisine: "American",
        category: "Dessert"
    }
];

module.exports = seedRecipes;