const API_KEY = "a35eb9b2a0da4da2cd02766b7d42ed24";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function printMovies(API_URL, list) {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const movieList = document.getElementById(list);
      data.results.forEach((movie) => {
        // Cambiar el formato de la fecha
        const dateObject = new Date(movie.release_date);
        // Obtener día, mes y año
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();
        // Crear una cadena con el formato deseado (DD-MM-YYYY)
        const formattedDate = `${day < 10 ? "0" : ""}${day}-${month < 10 ? "0" : ""}${month}-${year}`;

        // Crear un elemento <a> para cada película con su correspondiente href para el detalle
        const movieItem = document.createElement("a");
        movieItem.href = `./detallePelicula.html?id=${movie.id}`;
        movieItem.classList.add(
          "w-32",
          "lg:w-48",
          "cursor-pointer",
          "transition-all",
          "duration-200",
          "hover:opacity-80",
          "flex-none",
          "overflow-hidden",
          "whitespace-nowrap"
        );

        movieItem.innerHTML = `
        <img class="rounded-lg w-full" src="${IMAGE_URL}${movie.poster_path}" loading="lazy"  />
        <div class="mt-2">
          <p class="text-lg text-center ${movie.title.length > 17 ? "moving-text" : ""}" style="${movie.title.length > 17 ? `--animation-duration: ${movie.title.length * 0.2}s` : ""}">${movie.title}</p>
          <p class="text-sm text-center text-gris-300">${formattedDate}</p>
        </div>
        `;
        movieList.appendChild(movieItem);
      });
    })
    .catch((error) => console.error("Error:", error));
}
function fetchMoviesCinema() {
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES`;
  printMovies(API_URL, "cineList");
}

function fetchOurMovies() { // TODO: Cambiar cuando tengamos nuestra selección de películas
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
