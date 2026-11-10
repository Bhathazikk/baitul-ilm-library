
// BAITUL ILM LIBRARY
// Main website interactions

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Mobile navigation
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");

    menuToggle.textContent = mainNav.classList.contains("active")
      ? "✕"
      : "☰";
  });

  // Close menu after selecting a link
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      menuToggle.textContent = "☰";
    });
  });
}

// Automatically update the copyright year
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

console.log("Baitul Ilm Library website loaded successfully.");
