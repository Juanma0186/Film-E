const API_KEY = "a35eb9b2a0da4da2cd02766b7d42ed24";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function fetchMovies() {
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const movieList = document.getElementById("movieList");
      data.results.forEach((movie) => {
        const movieItem = document.createElement("a");
        movieItem.href = `detallePelicula.html?id=${movie.id}`;
        movieItem.classList.add(
          "movie-item",
          "bg-gris",
          "shadow-lg",
          "w-[25%]", // Añade esta clase para establecer un ancho fijo
          "flex-none" // Añade esta clase para evitar que las tarjetas se estiren
        );
        movieItem.innerHTML = `
                  <div class="w-full h-full  rounded-lg"><img class="h-full w-full object-cover" src="${IMAGE_URL}${movie.poster_path}" alt="${movie.title}" /></div>
                  <h2 class="text-xl text-center font-bold truncate">${movie.title}</h2>
                `;
        movieList.appendChild(movieItem);
      });
    })
    .catch((error) => console.error("Error:", error));
}

fetchMovies();

document
  .getElementById("mobile-menu-btn")
  .addEventListener("click", function () {
    var mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display =
      mobileMenu.style.display === "none" ? "block" : "none";
  });
