// Cogemos el boton del back-to-top
const btnBackToTop = document.getElementById("toTop");

export function toTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnBackToTop.style.display = "flex";
    btnBackToTop.style.opacity = "1";
  } else {
    btnBackToTop.style.opacity = "0";
  }
}

btnBackToTop.addEventListener("click", function () {
  // Subir hasta arriba y smooth
  window.scrollTo({ top: 0, behavior: "smooth" });
});
