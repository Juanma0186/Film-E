import { navbar } from "./navbar";
import { toTop } from "./toTop";
const apiKey = "a35eb9b2a0da4da2cd02766b7d42ed24";
const apiBaseUrl = "https://api.themoviedb.org/3";
let currentPage = 1;
let movies = [];
let selectedGenre = null;
const genres = {};

function searchMovies() {
  const sortBy = document.getElementById("sort_by").value;
  let url = `${apiBaseUrl}/discover/movie?api_key=${apiKey}&language=es-ES&page=${currentPage}&primary_release_date.gte=1980-01-01&primary_release_date.lte=2024-12-31`;
  if (selectedGenre) {
    url += `&with_genres=${selectedGenre}`;
  }
  if (sortBy) {
    url += `&sort_by=${sortBy}`;
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      movies = data.results;
      renderMovies();
    })
    .catch(error => {
      console.error(error);
    });
}

function renderMovies() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  for (const movie of movies) {
    if (movie.poster_path && movie.release_date) {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("bg-white", "p-4", "rounded", "shadow");
      movieDiv.innerHTML = `
              <h2 class="text-xl mb-2">${movie.title}</h2>
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-full mb-2 rounded">
              <p>Fecha de lanzamiento: ${movie.release_date}</p>
              <p>Valoración: ${movie.vote_average}</p>
              <p>Géneros: ${movie.genre_ids.map(id => genres[id]).join(', ')}</p>
          `;
      resultsDiv.appendChild(movieDiv);
    }
  }
}

function nextPage() {
  currentPage++;
  searchMovies();
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    searchMovies();
  }
}

function selectGenre(genreId) {
  selectedGenre = genreId;
  searchMovies();
}

function loadGenres() {
  const url = `${apiBaseUrl}/genre/movie/list?api_key=${apiKey}&language=es-ES`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const genresDiv = document.getElementById("genres");
      genresDiv.innerHTML = "";

      for (const genre of data.genres) {
        genres[genre.id] = genre.name;
        const button = document.createElement("button");
        button.classList.add("px-4", "py-2", "bg-blue-500", "text-white", "rounded", "mr-2", "mb-2");
        button.textContent = genre.name;
        button.onclick = () => selectGenre(genre.id);
        genresDiv.appendChild(button);
      }
    })
    .catch(error => {
      console.error(error);
    });
}

// Llama a la función de búsqueda y carga los géneros cuando se carga la página
window.onload = function () {
  searchMovies();
  loadGenres();
  navbar();
};

window.onscroll = function () {
  toTop();
};

// Agrega las funciones al objeto window
window.searchMovies = searchMovies;
window.previousPage = previousPage;
window.nextPage = nextPage;
