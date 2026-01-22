let currentPage = 1;
const perPage = 5;

function update() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const sort = document.getElementById("sortSelect").value;

  let filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(search) ||
    r.description.toLowerCase().includes(search)
  );

  if (sort === "title") filtered.sort((a,b)=>a.title.localeCompare(b.title));
  if (sort === "rating") filtered.sort((a,b)=>b.rating-a.rating);
  if (sort === "date") filtered.sort((a,b)=>new Date(b.date)-new Date(a.date));

  const start = (currentPage-1)*perPage;
  renderRecipes(filtered.slice(start, start+perPage));
}

document.getElementById("searchInput").addEventListener("input", update);
document.getElementById("sortSelect").addEventListener("change", update);
update();
