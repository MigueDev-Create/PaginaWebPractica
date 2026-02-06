const mobileMenuBtn = document.querySelector(".mobile__menu-btn");
const drawer = document.querySelector(".mobile__drawer");
const closeBtn = document.querySelector(".drawer__close");
const navLinks = document.querySelectorAll(".drawer__link");

function openDrawer() {
  drawer.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.classList.remove("active");
  document.body.style.overflow = "";
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", openDrawer);
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeDrawer);
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeDrawer);
});
