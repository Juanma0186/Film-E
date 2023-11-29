import { SEARCH_ALL } from "./config.js";
import * as utils from "./utilities.js";

import $ from "jquery";
const searchInput = $("#search-input");
const searchResults = $("#search-results");

searchInput.on("input", debounce(() => {
  const query = searchInput.val();

  if (query.length < 2) {
    searchResults.html("");
    searchResults.addClass("hidden");
    return;
  }
  $.ajax({
    url: `${SEARCH_ALL}${query}`,
    success: (data) => {
      const results = data.results;
      // console.log(results);
      searchResults.html("");

      if (results.length !== 0) {
        searchResults.removeClass("hidden");
      }

      if (results.length === 0) {
        const messageElement = $("<p>").text("No se encontraron resultados de búsqueda.");
        messageElement.addClass("text-black dark:text-white font-bold");

        searchResults.append(messageElement);
      } else {
        results.forEach((result) => {
          console.log(result);
          /* Creamos el elemento a que contendrá el póster y el título */
          const resultElement = $("<a>").addClass("flex gap-4 items-center w-fit p-2 bg-blanco-500 dark:bg-gris-100 rounded-lg hover:bg-blanco-400 transition-all duration-200 ease-linear cursor-pointer max-w-[600px]");

          /* Le asignamos un href en función de si es peli o serieS */
          if (result.media_type === "movie") {
            resultElement.attr("href", `detallePelicula.html?id=${result.id}`);
          } else {
            resultElement.attr("href", `detalleSerie.html?id=${result.id}`);
          }

          const mediaType = result.media_type === "movie" ? "Película" : "Serie";
          const titleElement = result.title || result.name;

          const average = utils.roundAverage(result.vote_average);
          console.log(result);
          const formattedDate = utils.formatDate(result.release_date || result.first_air_date);
          resultElement.html(`
            <div class="h-full">
              <img class="rounded-lg w-[96px] lg:w-[144px] h-[144px] lg:h-[216px] object-cover" alt="${mediaType} ${titleElement}" src="${result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : (result.media_type === "movie" ? "img/default-peli.webp" : "img/default-serie.webp")}" loading="lazy" />
            </div >
            <div class="p-4 flex flex-col justify-start text-left gap-2 flex-[2]">
              <p class="text-lg text-black dark:text-blanco-500 font-poppins">${titleElement}</p>
              <p class="text-md text-gris-300 dark:text-gris-500">${formattedDate}</p>
              <div class="relative w-[50px] lg:w-[60px]">
                  <svg viewBox="0 0 36 36" class="max-w-full ${average >= 70 ? "green" : (average <= 45 ? "red" : "yellow")} max-w-[50px] lg:max-w-[60px]">
                  <path class="circle" stroke-dasharray="${average}, 100" d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  <text x="18" y="22" class="percentage">${average}</text>
                </svg>
              </div>
            </div >
          `

          );

          searchResults.append(resultElement);
        });
      }
    },
  });
}, 100));

// Hacemos que el div de resultados de búsqueda se cierre al hacer click fuera de él y se vacíe al cerrarse
// También limpiamos el input de búsqueda
$(document).on("click", (event) => {
  if (!event.target.closest("#search-results")) {
    searchResults.html("");
    document.getElementById("search-input").value = "";
  }
});

// TODO: https://www.freecodecamp.org/espanol/news/curso-debounce-javascript-como-hacer-que-tu-js-espere/
function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
