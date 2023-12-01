import { verDetalle } from "./verDetallePelicula.js";
import { verReparto } from "./verReparto.js";
import { CAST_API_URL, MOVIE_API_URL } from "./config.js";
import { toTop } from "./toTop.js";
import { navbar } from "./navbar.js";

verDetalle(MOVIE_API_URL);
verReparto(CAST_API_URL, "castList");

document.getElementById("trailerModal").addEventListener("click", () => {
  document.getElementById("trailerModal").classList.add("hidden");
  document.getElementById("trailerContainer").innerHTML = "";
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
