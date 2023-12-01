import { ACTOR_API_URL, ACTOR_MOVIE_CREDITS_API_URL, ACTOR_TV_CREDITS_API_URL } from "./config.js";
import { printMovies } from "./printMovie.js";
import { verDetalleActor } from "./verDetalleActor.js";
import { navbar } from "./navbar.js";
import { toTop } from "./toTop.js";

window.onload = function () {
  verDetalleActor(ACTOR_API_URL);
  printMovies(ACTOR_MOVIE_CREDITS_API_URL, "cineList", true);
  printMovies(ACTOR_TV_CREDITS_API_URL, "tvList", true);
  navbar();
};

window.onscroll = function () {
  toTop();
};
