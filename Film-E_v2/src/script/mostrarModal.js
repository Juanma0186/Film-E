export function mostrarModal(imageSrc) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("imageModal").alt= imageSrc;
    document.getElementById("imageModal").classList.remove("hidden");
  }
  