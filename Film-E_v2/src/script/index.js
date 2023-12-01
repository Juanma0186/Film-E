import { API_KEY } from "./config";
import { printMovies } from "./printMovie";
import { toTop } from "./toTop";
import { navbar } from "./navbar";

function fetchMoviesCinema() {
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES`;
  printMovies(API_URL, "cineList");
}

function fetchOurMovies() {
  // TODO: Cambiar cuando tengamos nuestra selección de películas
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES`;
  printMovies(API_URL, "ourMoviesList");
}

function fetchPopularMovies() {
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`;
  printMovies(API_URL, "popularList");
}

window.onscroll = function () {
  toTop();
};
window.onload = function () {
  fetchMoviesCinema();
  fetchOurMovies();
  fetchPopularMovies();
  navbar();
};
