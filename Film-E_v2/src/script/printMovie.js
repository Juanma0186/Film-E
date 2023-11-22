import { IMAGE_URL } from "./config";

export function printMovies(API_URL, list) {
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
        const formattedDate = `${day < 10 ? "0" : ""}${day}-${
          month < 10 ? "0" : ""
        }${month}-${year}`;

        // Crear un elemento <a> para cada película con su correspondiente href para el detalle
        const movieItem = document.createElement("a");
        movieItem.href = `./detallePelicula.html?id=${movie.id}`;
        movieItem.classList.add(
          "relative",
          "w-32",
          "lg:w-48",
          "cursor-pointer",
          "transition-all",
          "duration-200",
          "hover:opacity-80",
          "flex-none",
          "whitespace-nowrap",
          "dark:text-blanco-500"
        );

        // Obtenemos el average de la película y lo redondeamos a un porcentaje entero
        const average = Math.round(movie.vote_average * 10);

        movieItem.innerHTML = `
          
          <div class="w-full">
            <img class="rounded-lg w-full" src="${IMAGE_URL}${movie.poster_path}" loading="lazy"  />
            <svg viewBox="0 0 36 36" class="circular-chart green max-w-[40px] lg:max-w-[50px]">
              <path class="circle" stroke-dasharray="${average}, 100" d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"></path>
              <text x="18" y="22" class="percentage">${average}</text>
          </svg>
          </div>
          <div class="mt-2">
          <div class="w-full h-full overflow-hidden">  
            <p class=" text-lg text-center ${movie.title.length > 17 ? "moving-text" : ""}" style="${movie.title.length > 17 ? `--animation-duration: ${movie.title.length * 0.2}s` : ""}">${movie.title}</p>
          </div>
          <p class="text-sm text-center text-gris-300">${formattedDate}</p>
          </div>
          
          `;
        movieList.appendChild(movieItem);
      });
    })
    .catch((error) => console.error("Error:", error));
}
