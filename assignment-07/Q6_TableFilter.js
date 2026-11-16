const searchInput = document.getElementById("searchInput");
const studentRows = document.querySelectorAll("#studentRows tr");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.trim().toLowerCase();
  let visibleRows = 0;

  studentRows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    const matchesSearch = rowText.includes(searchText);
    row.hidden = !matchesSearch;
    if (matchesSearch) visibleRows++;
  });

  noResults.hidden = visibleRows !== 0;
});
