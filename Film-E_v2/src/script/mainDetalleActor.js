import { ACTOR_API_URL, ACTOR_MOVIE_CREDITS_API_URL } from "./config.js";
import { printMovies } from "./printMovie.js";
import { verDetalleActor } from "./verDetalleActor.js";

window.onload = function () {
  verDetalleActor(ACTOR_API_URL);
  printMovies(ACTOR_MOVIE_CREDITS_API_URL, "cineList", true);
};

document.getElementById("backButton").addEventListener("click", () => {
  window.history.back();
});
