const API_KEY = "a35eb9b2a0da4da2cd02766b7d42ed24";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const movieId = new URLSearchParams(window.location.search).get("id");
const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=es-ES`;
const CAST_API_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=es-ES`;

let movieTitle;

fetch(MOVIE_API_URL)
  .then((response) => response.json())
  .then((movie) => {
    movieTitle = movie.title;
    const movieDetails = document.getElementById("movieDetails");
    movieDetails.innerHTML = `
        <div class="flex flex-col md:flex-row">
        <img class="w-full md:w-[400px] h-[400px] object-containt rounded-lg mb-5 md:mb-0 md:mr-8" src="${IMAGE_URL}${
      movie.poster_path
    }" alt="${movie.title}">
        <div class="text-azul-100">
            <h2 class="text-3xl font-bold mb-5">${movie.title}</h2>
            <p class="mb-4">${movie.overview}</p>
            <p class="mb-4">Fecha de estreno: ${movie.release_date}</p>
            <p class="mb-4">Duración: ${movie.runtime} minutos</p>
            <p class="mb-4">Puntuación: ${movie.vote_average}</p>
            <p class="mb-4">Géneros: ${movie.genres
              .map((genre) => genre.name)
              .join(", ")}</p>
            <p class="mb-4">Idioma original: ${movie.original_language}</p>
            <button id="trailerButton" class="px-4 py-2  font-bold rounded bg-azul-500 text-blanco-700 hover:bg-azul-300">
            Ver tráiler
        </button>
        </div>
    </div>
        `;
    document.getElementById("trailerButton").addEventListener("click", () => {
      const YOUTUBE_API_KEY = "AIzaSyBa4JfbgovmH0oBE3jHBJSfqTxlBCP0sZM";
      const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${movieTitle} tráiler&type=video&key=${YOUTUBE_API_KEY}`;

      fetch(YOUTUBE_API_URL)
        .then((response) => response.json())
        .then((data) => {
          const videoId = data.items[0].id.videoId;
          const trailerContainer = document.getElementById("trailerContainer");
          trailerContainer.innerHTML = `
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    `;
          document.getElementById("trailerModal").classList.remove("hidden");
        })
        .catch((error) => console.error("Error:", error));
    });
  })
  .catch((error) => console.error("Error:", error));

fetch(CAST_API_URL)
  .then((response) => response.json())
  .then((data) => {
    const castList = document.getElementById("castList");
    data.cast.slice(0, 10).forEach((member) => {
      const castMember = document.createElement("div");
      castMember.classList.add(
        "bg-gris",
        "flex-none",
        "p-2",
        "rounded-lg",
        "shadow-lg"
      );
      castMember.innerHTML = `
                <div class="flex flex-col items-center">
                    <img class="w-[200px] h-[200px] object-containt rounded-lg mb-2" src="${IMAGE_URL}${member.profile_path}" alt="${member.name}">
                    <p class="text-xl text-center font-bold ">${member.name}</p>
                </div>
            `;
      castList.appendChild(castMember);
    });
  })
  .catch((error) => console.error("Error:", error));

document.getElementById("trailerModal").addEventListener("click", () => {
  document.getElementById("trailerModal").classList.add("hidden");
  document.getElementById("trailerContainer").innerHTML = "";
});

document.getElementById("backButton").addEventListener("click", () => {
  window.history.back();
});
