const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const dropdownOptions = document.getElementById("dropdownOptions");

dropdownButton.addEventListener("click", () => {
  const isOpening = dropdownOptions.hidden;
  dropdownOptions.hidden = !isOpening;
  dropdownButton.setAttribute("aria-expanded", String(isOpening));
});

dropdownOptions.addEventListener("click", (event) => {
  const selectedOption = event.target.closest("li[data-value]");
  if (!selectedOption) return;

  dropdownButton.textContent = selectedOption.dataset.value;
  dropdownOptions.hidden = true;
  dropdownButton.setAttribute("aria-expanded", "false");
});

// Capturing phase: this listener runs before the target's click handlers.
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    dropdownOptions.hidden = true;
    dropdownButton.setAttribute("aria-expanded", "false");
  }
}, true);
