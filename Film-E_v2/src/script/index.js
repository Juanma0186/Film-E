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

window.onload = function () {
  fetchMoviesCinema();
  fetchOurMovies();
  fetchPopularMovies();
};

document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display =
      mobileMenu.style.display === "none" ? "block" : "none";
  });

// ! Función para el scroll horizontal
let isDragging = false;
let startX;
let scrollLeft;

const scrollContainer = document.querySelector(".scroll-container");

scrollContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 2; // Puedes ajustar el factor de multiplicación según tu preferencia
  scrollContainer.scrollLeft = scrollLeft - walk;
});

scrollContainer.addEventListener("mouseup", () => {
  isDragging = false;
});

scrollContainer.addEventListener("mouseleave", () => {
  isDragging = false;
});
