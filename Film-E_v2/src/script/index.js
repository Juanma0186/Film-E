const API_KEY = "a35eb9b2a0da4da2cd02766b7d42ed24";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function fetchMovies() {
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const movieList = document.getElementById("movieList");
      data.results.forEach((movie) => {
        console.log(movie.releaseDate);
        const dateObject = new Date(movie.releaseDate);

        // Obtener día, mes y año
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();

        // Crear una cadena con el formato deseado (DD-MM-YYYY)
        const formattedDate = `${day}-${month < 10 ? "0" : ""}${month}-${year}`;
        const movieItem = document.createElement("div");
        movieItem.classList.add(
          "w-32",
          "lg:w-48",
          "cursor-pointer",
          "transition-all",
          "duration-200",
          "hover:opacity-80",
          "flex-none"
        );

        movieItem.innerHTML = `
        <img class="rounded-lg w-full" src="${IMAGE_URL}${movie.poster_path}" />
        <div class="mt-2">
          <p class="text-lg text-center truncate">${movie.title}</p>
          <p class="text-sm text-center text-gris-300">${formattedDate}</p>
        </div>
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
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.style.display =
      mobileMenu.style.display === "none" ? "block" : "none";
  });
