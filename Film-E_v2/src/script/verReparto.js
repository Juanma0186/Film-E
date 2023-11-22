import { IMAGE_URL } from "./config.js";
import { mostrarModal } from "./mostrarModal.js";

export function verReparto(CAST_API_URL, list) {
  fetch(CAST_API_URL)
    .then((response) => response.json())
    .then((data) => {
      const castList = document.getElementById(list);
      data.cast.slice(0, 10).forEach((member) => {
        const castMember = document.createElement("a");
        // console.log(data);
        castMember.classList.add(
          "w-32",
          "lg:w-48",
          "cursor-pointer",
          "transition-all",
          "duration-200",
          "hover:opacity-80",
          "flex-none",
          "overflow-hidden",
          "whitespace-nowrap"
        );
        castMember.innerHTML = `
                  <div class="flex flex-col items-center">
                      <img id="imagen${member.cast_id}" class="rounded-lg w-full" src="${IMAGE_URL}${member.profile_path}" alt="${member.name}">
                      <p class="text-lg text-center font-bold   ">${member.character} </p>
                      <p class="text-sm text-center font-bold text-gris-300 ">${member.name} </p>
                  </div>
              `;
        castList.appendChild(castMember);
      });
      data.cast.slice(0, 10).forEach((member) => {
        document
          .getElementById(`imagen${member.cast_id}`)
          .addEventListener("click", () =>
            mostrarModal(IMAGE_URL + member.profile_path)
          );
      });
    })
    .catch((error) => console.error("Error:", error));
}
