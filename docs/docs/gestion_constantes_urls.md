# Gestión de Constantes y URLs de API

Estas constantes se utilizan para construir URLs que se utilizan en solicitudes a la API de TMDb para obtener información específica sobre películas, series, actores, géneros, etc.

```javascript
config.js
export const API_KEY = "a35eb9b2a0da4da2cd02766b7d42ed24";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const movieId = new URLSearchParams(window.location.search).get("id");
export const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=es-ES`;
export const CAST_API_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=es-ES`;
export const TV_CAST_API_URL = `https://api.themoviedb.org/3/tv/${movieId}/credits?api_key=${API_KEY}&language=es-ES`;
export const YOUTUBE_API_KEY = "AIzaSyBa4JfbgovmH0oBE3jHBJSfqTxlBCP0sZM";
export const REVIEWS_API_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=es-ES`;
export const ACTOR_API_URL = `https://api.themoviedb.org/3/person/${movieId}?api_key=${API_KEY}&language=es-ES`;
export const ACTOR_MOVIE_CREDITS_API_URL = `https://api.themoviedb.org/3/person/${movieId}/movie_credits?api_key=${API_KEY}&language=es-ES`;
export const ACTOR_TV_CREDITS_API_URL = `https://api.themoviedb.org/3/person/${movieId}/tv_credits?api_key=${API_KEY}&language=es-ES`;
export const GENRE_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${movieId}`;
export const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
export const SEARCH_ALL = `https://api.themoviedb.org/3/search/multi?language=es-ES&api_key=${API_KEY}&query=`;
export const serieId = new URLSearchParams(window.location.search).get("id");
export const SERIE_API_URL = `https://api.themoviedb.org/3/tv/${serieId}?api_key=${API_KEY}&language=es-ES`;
export const SERIE_CAST_API_URL = `https://api.themoviedb.org/3/tv/${serieId}/credits?api_key=${API_KEY}&language=es-ES`;
export const GENRE_SERIES_API_URL_ = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=${movieId}`;
export const TV_REVIEW_API_URL = `https://api.themoviedb.org/3/tv/${serieId}/reviews?api_key=${API_KEY}&language=en-`;
```


El archivo `config.js` es un excelente ejemplo de cómo  organizar y gestionar las constantes y las URL de la API en un solo lugar. Aquí están algunas de las ventajas de tener un archivo de configuración como este:

1. **Reutilización de código**: Al tener todas las URL de la API y las constantes en un solo lugar, se puede reutilizar en diferentes partes de la aplicación sin tener que reescribirlas.

2. **Mantenimiento**: Si se necesita cambiar el valor de una constante o la estructura de una URL de la API, solo se tiene que hacerl en un lugar. Esto hace que el mantenimiento del código sea mucho más fácil.

3. **Legibilidad**: Al agrupar todas las constantes y las URL de la API juntas, hace  que el código sea más legible y fácil de entender. Cualquier persona que lea el código puede ir a `config.js` y ver rápidamente todas las constantes y las URL de la API que se utiliza.

4. **Seguridad**: Almacenar las claves de API en una constante en `config.js` es una buena práctica de seguridad. Esto evita que la clave de API se disperse por todo el código, lo que podría ser un riesgo de seguridad.

5. **Organización**: Este archivo ayuda a mantener tu código organizado. Se Sabe exactamente dónde buscar cuando se necesita encontrar una URL de la API o una constante.

