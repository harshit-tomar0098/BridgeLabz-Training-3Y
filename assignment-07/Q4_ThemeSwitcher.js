const themeButtons = document.querySelectorAll("[data-theme-choice]");
const currentThemeText = document.getElementById("currentTheme");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTheme = button.getAttribute("data-theme-choice");

    // setAttribute updates the custom data-theme attribute on the body.
    document.body.setAttribute("class", `${selectedTheme}-theme`);
    document.body.setAttribute("data-theme", selectedTheme);

    currentThemeText.textContent =
      `Current theme: ${selectedTheme.charAt(0).toUpperCase()}${selectedTheme.slice(1)}`;
  });
});
