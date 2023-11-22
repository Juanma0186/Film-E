export function mostrarModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = imageSrc;
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Agrega un evento de clic al modal para ocultarlo
  modal.addEventListener("click", (event) => {
    // Solo oculta el modal si el clic fue fuera de la imagen
    if (event.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
}
