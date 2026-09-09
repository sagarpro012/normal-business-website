const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");
const year = document.getElementById("year");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
  themeBtn.textContent = dark ? "☀" : "☾";
});

year.textContent = new Date().getFullYear();
