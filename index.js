const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector(".sidebar");
const closeMenu = document.querySelector(".close__menu");
const overlayBg = overlay.querySelector(".overlay__bg");

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
