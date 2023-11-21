import { CAST_API_URL, IMAGE_URL } from './config.js';
import { mostrarModal } from './mostrarModal.js';

export function verReparto() {
  fetch(CAST_API_URL)
    .then((response) => response.json())
    .then((data) => {
      const castList = document.getElementById("castList");
      data.cast.slice(0, 10).forEach((member) => {
        const castMember = document.createElement("div");
        castMember.classList.add(
          "bg-gris",
          "flex-none",
          "p-2",
          "rounded-lg",
          "shadow-lg"
        );
        castMember.innerHTML = `
                  <div class="flex flex-col items-center">
                      <img id="imagen${member.cast_id}" class="cursor-pointer w-[200px] h-[200px] object-containt rounded-lg mb-2" src="${IMAGE_URL}${member.profile_path}" alt="${member.name}">
                      <p class="text-xl text-center font-bold ">${member.name}</p>
                  </div>
              `;
        castList.appendChild(castMember);
      });
      data.cast.slice(0, 10).forEach((member) => {
        document.getElementById(`imagen${member.cast_id}`).addEventListener("click", () => mostrarModal(IMAGE_URL + member.profile_path));
      });
    })
    .catch((error) => console.error("Error:", error));
}
