import { MOVIE_API_URL, IMAGE_URL } from './config.js';
import { verTrailer } from './verTrailer.js';
import { mostrarModal } from './mostrarModal.js';

let movieTitle;

export function verDetalle() {
  fetch(MOVIE_API_URL)
    .then((response) => response.json())
    .then((movie) => {
      movieTitle = movie.title;
      const movieDetails = document.getElementById("movieDetails");
      movieDetails.innerHTML = `
          <div class="flex flex-col md:flex-row">
            <img id="movieImage" class="cursor-pointer w-full md:w-[400px] h-[400px] object-containt rounded-lg mb-5 md:mb-0 md:mr-8" src="${IMAGE_URL}${movie.poster_path}" alt="${movie.title}">
            <div class="text-azul-100">
              <h2 class="text-3xl font-bold mb-5">${movie.title}</h2>
              <p class="mb-4">${movie.overview}</p>
              <p class="mb-4">Fecha de estreno: ${movie.release_date}</p>
              <p class="mb-4">Duración: ${movie.runtime} minutos</p>
              <p class="mb-4">Puntuación: ${movie.vote_average}</p>
              <p class="mb-4">Géneros: ${movie.genres.map((genre) => genre.name).join(", ")}</p>
              <p class="mb-4">Idioma original: ${movie.original_language}</p>
              <button id="trailerButton" class="px-4 py-2  font-bold rounded bg-azul-500 text-blanco-700 hover:bg-azul-300">
              Ver tráiler
              </button>
            </div>
          </div>
          `;
          document.getElementById("movieImage").addEventListener("click", () => mostrarModal(IMAGE_URL + movie.poster_path));
          
          

      document.getElementById("trailerButton").addEventListener("click", () => verTrailer(movieTitle));
    })
    .catch((error) => console.error("Error:", error));
  return movieTitle;
}
