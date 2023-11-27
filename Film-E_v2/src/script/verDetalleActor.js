import { IMAGE_URL } from "./config.js";
import { mostrarModal } from "./mostrarModal.js";

export function verDetalleActor(ACTOR_API_URL) {
  fetch(ACTOR_API_URL)
    .then((response) => response.json())
    .then((actor) => {
      const actorDetails = document.getElementById("actorDetails");
      const imageUrl = actor.profile_path ? `${IMAGE_URL}${actor.profile_path}` : "img/default.webp";
      const actorName = actor.name || "Sin nombre";
      const actorBiography = actor.biography || "Sin biografía";
      const actorBirthday = actor.birthday || "Sin fecha de nacimiento";
      const actorPlaceOfBirth = actor.place_of_birth || "Sin lugar de nacimiento";
      const actorPopularity = actor.popularity || "Sin popularidad";
      actorDetails.innerHTML = `
            <div class="flex flex-col md:flex-row">
              <img id="actorImage" class="cursor-pointer w-full md:w-[400px] h-[400px] object-containt rounded-lg mb-5 md:mb-0 md:mr-8" src="${imageUrl}" alt="${actor.name}">
              <div class="text-azul-100">
                <h2 class="text-3xl font-bold mb-5">${actorName}</h2>
                <p class="mb-4">${actorBiography}</p>
                <p class="mb-4">Fecha de nacimiento: ${actorBirthday}</p>
                <p class="mb-4">Lugar de nacimiento: ${actorPlaceOfBirth}</p>
                <p class="mb-4">Popularidad: ${actorPopularity}</p>
              </div>
            </div>
            `;
      document
        .getElementById("actorImage")
        .addEventListener("click", () =>
          mostrarModal(imageUrl)
        );
    })
    .catch((error) => console.error("Error:", error));
}
