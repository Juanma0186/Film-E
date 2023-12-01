import { toTop } from "./toTop.js";
import { navbar } from "./navbar.js";

window.onload = function () {
  navbar();
};

window.onscroll = function () {
  toTop();
};
