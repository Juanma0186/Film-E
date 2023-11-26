import { SERIE_API_URL, SERIE_CAST_API_URL, TV_REVIEW_API_URL } from "./config.js";
import { verReparto } from "./verReparto.js";
import { verDetalle } from "./verDetallePelicula.js";
import { toTop } from "./toTop.js";
import { navbar } from "./navbar.js";
import { verReseñas } from "./verReseñas.js";

verDetalle(SERIE_API_URL);
verReparto(SERIE_CAST_API_URL, "castList");
verReseñas(TV_REVIEW_API_URL, "reviewsList");

document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "index.html";
});

window.onload = function () {
  navbar();
};

window.onscroll = function () {
  toTop();
};
