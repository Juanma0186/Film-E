import { SEARCH_API_URL, SEARCH_ALL } from "./config.js";
import $ from "jquery";
const searchInput = $("#search-input");
const searchResults = $("#search-results");

searchInput.on("input", debounce(() => {
  const query = searchInput.val();

  if (query.length < 2) {
    searchResults.html("");
    return;
  }
  $.ajax({
    url: `${SEARCH_ALL}${query}`,
    success: (data) => {
      const results = data.results;
      console.log(results);
      searchResults.html("");

      if (results.length === 0) {
        const messageElement = $("<p>").text("No se encontraron resultados de búsqueda.");

        searchResults.append(messageElement);
      } else {
        results.forEach((result) => {
          console.log(result);
          const resultElement = $("<div>").addClass("cursor-pointer");

          const mediaType = result.media_type === "movie" ? $("<p>").text("Película") : $("<p>").text("Serie");
          const titleElement = $("<h2>").text(result.title || result.name);

          const imageElement = $("<img>").attr("src", `https://image.tmdb.org/t/p/w500${result.poster_path}`);
          imageElement.attr("alt", result.title);
          imageElement.addClass("w-[100px]", "h-[150px]", "object-cover", "rounded", "my-2", "text-center");

          imageElement.on("error", () => {
            if (result.media_type === "movie") {
              imageElement.attr("src", "img/default-peli.webp");
            } else {
              imageElement.attr("src", "img/default-serie.webp");
            }
          });

          resultElement.append(mediaType);
          resultElement.append(titleElement);
          resultElement.append(imageElement);

          resultElement.on("click", () => {
            if (result.media_type === "movie") {
              window.location.href = `detallePelicula.html?id=${result.id}`;
            } else {
              window.location.href = `detalleSerie.html?id=${result.id}`;
            }
          });
          searchResults.append(resultElement);
        });
      }
    },
  });
}, 100));

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
