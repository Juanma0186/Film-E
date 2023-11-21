import {  verDetalle } from './verDetalle.js';
import {  verReparto } from './verReparto.js';

verDetalle();
verReparto();

document.getElementById("trailerModal").addEventListener("click", () => {
  document.getElementById("trailerModal").classList.add("hidden");
  document.getElementById("trailerContainer").innerHTML = "";
});

document.getElementById("backButton").addEventListener("click", () => {
  window.history.back();
});


document.getElementById("imageModal").addEventListener("click", () => {
  document.getElementById("imageModal").classList.add("hidden");
});

