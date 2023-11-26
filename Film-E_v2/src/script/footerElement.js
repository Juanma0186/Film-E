import { navbar } from "./navbar";
import { toTop } from "./toTop";

window.onload = function () {
  navbar();
};

window.onscroll = function () {
  toTop();
};

document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display =
      mobileMenu.style.display === "none" ? "block" : "none";
  });
