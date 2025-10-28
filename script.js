// DARK MODE TOGGLE
const toggle = document.getElementById("darkModeToggle");
const body = document.body;

// Restore theme if saved
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// FADE-IN ANIMATION
const fadeEls = document.querySelectorAll(".fade-in");

function showOnScroll() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
