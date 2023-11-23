import { IMAGE_URL, SERIE_API_URL, SERIE_CAST_API_URL, API_KEY } from "./config.js";
import { verTrailer } from "./verTrailer.js";
import { mostrarModal } from "./mostrarModal.js";
import { verReparto } from "./verReparto.js";
import { printMovies } from "./printMovie.js";

export function verDetalleSerie(SERIES_API_URL) {
  fetch(SERIES_API_URL)
    .then((response) => response.json())
    .then((serie) => {
      const serieTitle = serie.name;
      const serieDetails = document.getElementById("serieDetails");
      const imageUrl = serie.poster_path ? `${IMAGE_URL}${serie.poster_path}` : "img/default.jpg";
      serieDetails.innerHTML = `
        <div class="flex flex-col md:flex-row">
            <img id="serieImage" class="cursor-pointer w-full md:w-[400px] h-[400px] object-containt rounded-lg mb-5 md:mb-0 md:mr-8" src="${imageUrl}" alt="${serie.name}">
            <div class="text-azul-100">
            <h2 class="text-3xl font-bold mb-5">${serie.name}</h2>
            <p class="mb-4">${serie.overview}</p>
            <p class="mb-4">Idioma original: ${serie.original_language}</p>
            <button id="trailerButton" class="px-4 py-2  font-bold rounded bg-azul-500 text-blanco-700 hover:bg-azul-300">
            Ver tráiler
            </button>
            </div>
        </div>`;
      document
        .getElementById("serieImage")
        .addEventListener("click", () =>
          mostrarModal(imageUrl)
        );

      document
        .getElementById("trailerButton")
        .addEventListener("click", () => verTrailer(serieTitle));

      serie.genres.forEach((genre) => {
        console.log(genre.id);
        const GENRE_API_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${genre.id}`;
        printMovies(GENRE_API_URL, "serieList"); // Llama a printMovies para cada género
      });
    });
}

verDetalleSerie(SERIE_API_URL);
verReparto(SERIE_CAST_API_URL, "castList");
