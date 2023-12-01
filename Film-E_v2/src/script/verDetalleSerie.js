import { IMAGE_URL, API_KEY } from "./config.js";
import { verTrailer } from "./verTrailer.js";
import { mostrarModal } from "./mostrarModal.js";
import { printMovies } from "./printMovie.js";
import * as utilities from "./utilities.js";

let serieTitle;

export function verDetalle(SERIE_API_URL) {
  fetch(SERIE_API_URL)
    .then(response => response.json())
    .then((serie) => {
      const average = utilities.roundAverage(serie.vote_average);
      const year = utilities.getYear(serie.first_air_date);
      const formattedDate = utilities.formatDate(serie.first_air_date);

      const duration = `<span class="italic">${serie.number_of_seasons} temporadas con ${serie.number_of_episodes} episodios</span>`;

      serieTitle = serie.name;
      const serieDetails = document.getElementById("serieDetails");
      const imageUrl = serie.poster_path ? `${IMAGE_URL}${serie.poster_path}` : "img/default-serie.webp";
      serieDetails.innerHTML = `
          <div class="flex flex-col md:flex-row gap-[1em]">
            <div class="flex-[1-1-400px] flex items-center justify-center md:max-w-[400px]">
              <img id="movieImage" class="cursor-pointer w-full h-full aspect-auto object-contain rounded-lg" src="${imageUrl}" alt="${serieTitle}">
            </div>
            <div class="flex-[2] flex flex-col items-start gap-2 px-4 py-[2em] dark:text-blanco-500 text-xl">
              <h2 class="text-4xl font-bold dark:text-blanco-500 font-poppins">${serieTitle} &nbsp;
              <span class="text-gris-300 dark:text-gris-500 font-normal">(${year})</span></h2>
              <p class="flex flex-row items-center justify-center flex-wrap gap-4 my-2">${serie.genres.map((genre) => `<span class="p-2 bg-azul-400 text-blanco-500 rounded-[20px] text-xs cursor-pointer font-bold uppercase">${genre.name}</span>`).join("")}</p>

              <div class="flex items-center gap-4">
                <div class="relative w-[50px] lg:w-[60px]">
                  <svg viewBox="0 0 36 36" class="max-w-full ${average >= 70 ? "green" : (average <= 45 ? "red" : "yellow")} max-w-[50px] lg:max-w-[60px]">
                  <path class="circle" stroke-dasharray="${average}, 100" d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  <text x="18" y="22" class="percentage">${average}</text>
                </svg>
                </div>
              </div>
              <p>Fecha de estreno: <span class="italic">${formattedDate}</span></p>
              <p>Duracion : ${duration}</p>
              <p class="flex items-center justify-center" title="${serie.original_language}">Idioma original:&nbsp; <img class="w-[35px] h-[35px] rounded-full" src="/img/flags/${serie.original_language}.webp" alt="${serie.original_language}"><span class="uppercase font-bold">&nbsp;${serie.original_language}</span></p>
              </p>
              <p><span class="underline">Sinopsis:</span><br/><span class="text-lg">${serie.overview ? serie.overview : "<b>[No disponible]</b>"}</span></p>
              <div class="flex items-center gap-4 mt-5  ">
                <span>Trailer:</span>
                  <button id="trailerButton" class="w-[50px] h-[50px] flex items-center justify-center bg-azul-500 text-blanco-700 hover:bg-azul-300 rounded-full group transition-all duration-300 ease-linear">
                  <span class="bi bi-play text-3xl group-hover:scale-[1.1] translate-x-[2px]"></span>
                </button>
              </div>

            </div>
          </div>
          `;
      document
        .getElementById("movieImage")
        .addEventListener("click", () =>
          mostrarModal(imageUrl)
        );

      document
        .getElementById("trailerButton")
        .addEventListener("click", () => verTrailer(serieTitle));

      serie.genres.forEach((genre) => {
        let GENRE_API_URL;
        if (serie.runtime) { // Si tiene duración, es una película
          GENRE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}&language=es-ES`;
        } else { // Si no tiene duración, es una serie
          GENRE_API_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${genre.id}&language=es-ES`;
        }
        printMovies(GENRE_API_URL, "cineList"); // Llama a printMovies para cada género
      });
    })
    .catch((error) => console.error("Error:", error));
  return serieTitle;
}
