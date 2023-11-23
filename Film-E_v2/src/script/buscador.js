import { SEARCH_API_URL } from "./config.js";
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
    url: `${SEARCH_API_URL}${query}`,
    success: (data) => {
      const movies = data.results;

      searchResults.html("");

      if (movies.length === 0) {
        const messageElement = $("<p>").text("No se encontraron resultados de búsqueda.");

        searchResults.append(messageElement);
      } else {
        movies.forEach((movie) => {
          const movieElement = $("<div>").addClass("cursor-pointer");

          const titleElement = $("<h2>").text(movie.title);

          const imageElement = $("<img>").attr("src", `https://image.tmdb.org/t/p/w500${movie.poster_path}`);
          imageElement.attr("alt", movie.title);
          imageElement.addClass("w-[100px]", "h-[150px]", "object-cover", "rounded", "my-2", "text-center");

          imageElement.on("error", () => {
            imageElement.attr("src", "img/default.jpg");
          });

          movieElement.append(titleElement);
          movieElement.append(imageElement);

          movieElement.on("click", () => {
            window.location.href = `detallePelicula.html?id=${movie.id}`;
          });
          searchResults.append(movieElement);
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
