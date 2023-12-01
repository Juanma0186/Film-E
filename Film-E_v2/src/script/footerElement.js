import { navbar } from "./navbar";
import { toTop } from "./toTop";

window.onload = function () {
  navbar();
};

window.onscroll = function () {
  toTop();
};
