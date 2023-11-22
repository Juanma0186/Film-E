export const API_KEY = "a35eb9b2a0da4da2cd02766b7d42ed24";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const movieId = new URLSearchParams(window.location.search).get("id");
export const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=es-ES`;
export const CAST_API_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=es-ES`;
export const YOUTUBE_API_KEY = "AIzaSyBa4JfbgovmH0oBE3jHBJSfqTxlBCP0sZM";
export const REVIEWS_API_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=es-ES`;
