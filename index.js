const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector(".sidebar");
const closeMenu = document.querySelector(".close__menu");
const overlayBg = overlay.querySelector(".overlay__bg");

const darkBtn = document.getElementById("dark-mode");
const darkSmall = document.getElementById("dark-small");

const lightBtn = document.getElementById("light-mode");
const lightSmall = document.getElementById("light-small");
darkBtn.addEventListener("click", activateDarKMode);
darkSmall.addEventListener("click", activateDarKMode);
lightBtn.addEventListener("click", activateLightMode);
lightSmall.addEventListener("click", activateLightMode);
function activateDarKMode() {
  if (document.body.getAttribute("light-mode") == "light") {
    document.body.setAttribute("light-mode", "dark");
  }
}
function activateLightMode() {
  if (document.body.getAttribute("light-mode") == "dark") {
    document.body.setAttribute("light-mode", "light");
  }
}
hamburger.onclick = () => {
  overlay.classList.remove("close");
  overlay.classList.add("open");
};

closeMenu.onclick = () => {
  sidebar.classList.add("close");
  setTimeout(() => {
    overlayBg.classList.add("close");
    setTimeout(() => {
      overlay.classList.remove("open");
      sidebar.classList.remove("close");
      overlayBg.classList.remove("close");
    }, 400);
  }, 300);
};
