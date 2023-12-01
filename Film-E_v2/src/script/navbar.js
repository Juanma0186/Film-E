import { toggleDarkMode } from "./modoOscuro";
import { navItemsHover } from "./navItemsHover";

export function navbar() {
  toggleDarkMode();
  navItemsHover();
  document
    .getElementById("mobile-menu-btn")
    .addEventListener("click", function () {
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.style.display =
        mobileMenu.style.display === "none" ? "block" : "none";
    });
}
