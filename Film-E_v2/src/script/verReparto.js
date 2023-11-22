import { IMAGE_URL } from "./config.js";

export function verReparto(CAST_API_URL, list) {
  fetch(CAST_API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const castList = document.getElementById(list);
      data.cast.slice(0, 10).forEach((member) => {
        const castMember = document.createElement("a");
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
        // Si el miembro del reparto no tiene una imagen disponible, usamos una imagen por defecto
        const imageUrl = member.profile_path ? `${IMAGE_URL}${member.profile_path}` : "img/default.jpg";
        castMember.innerHTML = `
                  <div class="flex flex-col items-center">
                      <img id="imagen${member.cast_id}" class="rounded-lg w-full" src="${imageUrl}" alt="${member.name}">
                      <p class="text-lg text-center font-bold   ">${member.character} </p>
                      <p class="text-sm text-center font-bold text-gris-300 ">${member.name} </p>
                  </div>
              `;
        castList.appendChild(castMember);
      });
      data.cast.slice(0, 10).forEach((member) => {
        document
          .getElementById(`imagen${member.cast_id}`)
          .addEventListener("click", () => {
            window.location.href = `detalleActor.html?id=${member.id}`;
          });
      });
    })
    .catch((error) => console.error("Error:", error));
}
