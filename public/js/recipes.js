let recipes = [];

async function loadRecipes() {
  const response = await fetch('/api/recipes');
  recipes = await response.json();
  update();
}

loadRecipes();