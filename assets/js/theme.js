(function () {
  var toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) return;

  function currentTheme() {
    return document.documentElement.dataset.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  function updateButton(theme) {
    var next = theme === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", "Switch to " + next + " theme");
    toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  updateButton(currentTheme());

  toggle.addEventListener("click", function () {
    var nextTheme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    updateButton(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (error) {}
  });
}());
