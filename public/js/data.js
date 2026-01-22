function renderRecipes(list) {
  const container = document.getElementById("recipeList");
  container.innerHTML = "";

  list.forEach(r => {
    container.innerHTML += `
      <div class="recipe-item">
        <h4>
          <a href="/recipes/${r._id}" class="text-brand">
            ${r.name}
          </a>
        </h4>
        <p>${r.description}</p>
        <div class="star-rating">⭐ ${r.rating}</div>
        <div class="recipe-meta">
          ${r.author} • ${r.cuisine || ''} • ${r.cookTime}
        </div>
      </div>
    `;
  });
}