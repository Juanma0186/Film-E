import { IMAGE_URL } from "./config.js";
import { mostrarModal } from "./mostrarModal.js";
import * as utilities from "./utilities.js";

export function verDetalleActor(ACTOR_API_URL) {
  fetch(ACTOR_API_URL)
    .then((response) => response.json())
    .then((actor) => {
      const actorDetails = document.getElementById("actorDetails");
      const imageUrl = actor.profile_path ? `${IMAGE_URL}${actor.profile_path}` : "img/default.webp";
      const actorName = actor.name || "Sin nombre";
      const actorBirthday = utilities.formatDate(actor.birthday) || "Sin fecha de nacimiento";
      const actorDeathday = `<p>Fallecido en: ${utilities.formatDate(actor.deathday)}</p>`;
      const actorPlaceOfBirth = actor.place_of_birth || "Sin lugar de nacimiento";
      const actorPopularity = actor.popularity || "Sin popularidad";
      actorDetails.innerHTML = `
            <div class="flex flex-col md:flex-row gap-[1em]">
              <div class="flex-[1-1-400px] flex items-center justify-center md:max-w-[400px]">
                <img id="actorImage" class="cursor-pointer w-full h-full aspect-auto object-contain rounded-lg" src="${imageUrl}" alt="${actor.name}">
              </div>
              <div class="flex-[2] flex flex-col items-start gap-2 px-4 py-[2em] dark:text-blanco-500 text-xl">
                  <h2 class="text-4xl font-bold dark:text-blanco-500 font-poppins">${actorName}<span class="text-gris-300 dark:text-gris-500 font-normal"> (${actorBirthday})</span></h2>
                  <p> ${actorPlaceOfBirth}</p>
                  <p><span class="underline">Biografía:</span><br/><span class="text-lg">${actor.biography ? actor.biography : "<b>[No disponible]</b>"}</span></p>
                  ${actor.deathday ? actorDeathday : ""}
                  <p">Popularidad: ${actorPopularity}</p>
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
