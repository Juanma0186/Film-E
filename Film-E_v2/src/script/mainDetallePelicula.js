import { verDetalle } from "./verDetallePelicula.js";
import { verReparto } from "./verReparto.js";
import { verReseñas } from "./verReseñas.js";
import { CAST_API_URL, REVIEWS_API_URL, MOVIE_API_URL } from "./config.js";
import { toTop } from "./toTop.js";
import { navbar } from "./navbar.js";

verDetalle(MOVIE_API_URL);
verReparto(CAST_API_URL, "castList");
verReseñas(REVIEWS_API_URL, "reviewsList");

document.getElementById("trailerModal").addEventListener("click", () => {
  document.getElementById("trailerModal").classList.add("hidden");
  document.getElementById("trailerContainer").innerHTML = "";
});

document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "index.html";
});

document.getElementById("imageModal").addEventListener("click", () => {
  document.getElementById("imageModal").classList.add("hidden");
});

window.onload = function () {
  navbar();
};

window.onscroll = function () {
  toTop();
};
