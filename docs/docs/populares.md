# Películas Populares

## Funcionamiento

La sección de películas populares muestra las películas más populares del momento. Para ello, se realiza una petición a la API de The Movie Database (TMDb) con la URL de películas populares.

```javascript title="index.js"
import { API_KEY } from "./config";
import { printMovies } from "./printMovie";
import { toTop } from "./toTop";
import { navbar } from "./navbar";

function fetchPopularMovies() {
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES`;
  printMovies(API_URL, "popularList");
} 
```

Al igual que en la sección de películas en cines, se utiliza la función `printMovies` para imprimir las películas en el DOM con el mismo formato.
