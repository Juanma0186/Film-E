import { API_KEY } from "./config";
import { printMovies } from "./printMovie";

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

document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display =
      mobileMenu.style.display === "none" ? "block" : "none";
  });

// Cogemos el boton del back-to-top
const btnBackToTop = document.getElementById("toTop");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnBackToTop.style.display = "flex";
    btnBackToTop.style.opacity = "1";
  } else {
    btnBackToTop.style.opacity = "0";
  }
}

btnBackToTop.addEventListener("click", function () {
  // Subir hasta arriba y smooth
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = function () {
  scrollFunction();
};

window.onload = function () {
  fetchMoviesCinema();
  fetchOurMovies();
  fetchPopularMovies();
};
