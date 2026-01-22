let currentPage = 1;
const perPage = 5;

function update() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const sort = document.getElementById("sortSelect").value;

  let filtered = recipes.filter(r =>
    r.name.toLowerCase().includes(search) ||
    r.description.toLowerCase().includes(search)
  );

  if (sort === "title") filtered.sort((a,b)=>a.name.localeCompare(b.name));
  if (sort === "rating") filtered.sort((a,b)=>b.rating-a.rating);
  if (sort === "date") filtered.sort((a,b)=>new Date(b.date)-new Date(a.date));

  const start = (currentPage-1)*perPage;
  renderRecipes(filtered.slice(start, start+perPage));
  renderPagination(filtered.length);
}

document.getElementById("searchInput").addEventListener("input", update);
document.getElementById("sortSelect").addEventListener("change", update);

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / perPage);
  const container = document.getElementById("pagination");
  container.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    container.innerHTML += `
      <button class="btn btn-sm ${i === currentPage ? 'btn-brand' : 'btn-outline-secondary'} mx-1" 
              onclick="goToPage(${i})">${i}</button>
    `;
  }
}

function goToPage(page) {
  currentPage = page;
  update();
}