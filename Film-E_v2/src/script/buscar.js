import { API_KEY } from "./config.js";

const apiBaseUrl = "https://api.themoviedb.org/3";
let currentPage = 1;
let movies = [];
let selectedGenre = null;
const genres = {};

function searchMovies() {
  const sortBy = document.getElementById("sort_by").value || "popularity.desc";
  let url = `${apiBaseUrl}/discover/movie?api_key=${API_KEY}&language=es-ES&sort_by=${sortBy}&page=${currentPage}&primary_release_date.gte=1980-01-01&primary_release_date.lte=2023-12-31`;
  if (selectedGenre) {
    url += `&with_genres=${selectedGenre}`;
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
            <p>Géneros: ${movie.genre_ids.map(id => genres[id]).join(", ")}</p>
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
  const url = `${apiBaseUrl}/genre/movie/list?api_key=${API_KEY}&language=es-ES`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const genresDiv = document.getElementById("genres");
      genresDiv.innerHTML = "";

      for (const genre of data.genres) {
        genres[genre.id] = genre.name;
        const button = document.createElement("button");
        button.classList.add("px-4", "py-2", "bg-red-500", "text-white", "rounded-full", "mr-2", "mb-2");
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
};
