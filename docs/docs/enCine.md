# Películas en Cartelera

## Funcionamiento

La sección de películas en cartelera muestra las películas que se encuentran actualmente en cines. Para ello, se realiza una petición a la API de The Movie Database (TMDb) con la URL de películas en cartelera.

```javascript title="index.js"
import { API_KEY } from "./config";
import { printMovies } from "./printMovie";
import { toTop } from "./toTop";
import { navbar } from "./navbar";

function fetchMoviesCinema() {
  const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES`;
  printMovies(API_URL, "cineList");
}
```

Mediante la función `printMovies` se obtiene la información de las películas en cartelera y se imprimen en el DOM en forma de tarjetas con su título, fecha de estreno y valoración correspondiente.
