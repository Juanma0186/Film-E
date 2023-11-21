import {  verDetalle } from './verDetalle.js';
import {  verReparto } from './verReparto.js';
import {API_KEY,CAST_API_URL,IMAGE_URL,MOVIE_API_URL} from './config.js';

verDetalle();
verReparto(CAST_API_URL,"castList");

document.getElementById("trailerModal").addEventListener("click", () => {
  document.getElementById("trailerModal").classList.add("hidden");
  document.getElementById("trailerContainer").innerHTML = "";
});

document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "index.html";
});


document.getElementById("imageModal").addEventListener("click", () => {
  document.getElementById("imageModal").classList.add("hidden");
});

