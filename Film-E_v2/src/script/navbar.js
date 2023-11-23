import { toggleDarkMode } from "./modoOscuro";
import { navItemsHover } from "./navItemsHover";

export function navbar() {
  toggleDarkMode();
  navItemsHover();
}
