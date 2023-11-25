import {SERIE_API_URL, SERIE_CAST_API_URL } from "./config.js";
import { verReparto } from "./verReparto.js";
import { verDetalle } from "./verDetallePelicula.js";
import { toTop } from "./toTop.js";
import { navbar } from "./navbar.js";

verDetalle(SERIE_API_URL);
verReparto(SERIE_CAST_API_URL, "castList");

document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "index.html";
});

window.onload = function () {
  navbar();
};

window.onscroll = function () {
  toTop();
};