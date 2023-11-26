export function verReseñas(REVIEWS_API_URL, list) {
  fetch(REVIEWS_API_URL)
    .then((response) => response.json())
    .then((data) => {
      const reviewsList = document.getElementById(list);
      let reviewIndex = 0;
      if (data.results.length === 0) {
        reviewsList.classList.add(
          "text-center",
          "text-gray-500",
          "text-2xl",
          "font-bold"
        );
        reviewsList.textContent = "Este contenido no tiene reseñas";
        return;
      }
      const createReviewItem = (review, index) => {
        traducirTexto(review.content, "es", "claveAPI");
        const reviewItem = document.createElement("div");
        reviewItem.classList.add(
          "w-full",
          "border",
          "p-4",
          "mb-4",
          "shadow-md",
          "bg-azul-900",
          "rounded-lg"
        );
        reviewItem.innerHTML = `
            <h3 class="font-bold text-lg ">Una reseña de <span class="italic capitalize ">${review.author} </span></h3>
            <p class=" font-bold ">${review.author_details.rating} ⭐</p>
            <p class="text-gray-500">Escrito por ${review.author} el ${new Date(review.created_at).toLocaleDateString("es-ES")}</p>
            <p id="contentShort${index}" class="text-gray-700">${review.content.substring(0, 150)}...</p>
            <p id="contentFull${index}" class="hidden text-gray-700">${review.content}</p>
            <a id="readMore${index}" class="mt-[2em] mb-6  text-azul-300 font-bold cursor-pointer hover:underline">Leer el resto</a>
          `;
        setTimeout(() => {
          document
            .getElementById(`readMore${index}`)
            .addEventListener("click", function () {
              document
                .getElementById(`contentShort${index}`)
                .classList.add("hidden");
              document
                .getElementById(`contentFull${index}`)
                .classList.remove("hidden");
              this.classList.add("hidden");
            });
        }, 0);
        return reviewItem;
      };

      const updateReview = (index) => {
        while (reviewsList.firstChild) {
          reviewsList.removeChild(reviewsList.firstChild);
        }
        reviewsList.appendChild(createReviewItem(data.results[index], index));
      };

      if (data.results.length > 1) {
        const nextReviewButton = document.createElement("a");
        nextReviewButton.textContent = `Reseñas ${data.results.length}`;
        nextReviewButton.classList.add(
          "mt-[2em]",
          "mb-6",
          "text-xl",
          "text-azul-300",
          "font-bold",
          "cursor-pointer",
          "hover:underline"
        );
        nextReviewButton.addEventListener("click", function () {
          reviewIndex = (reviewIndex + 1) % data.results.length;
          updateReview(reviewIndex);
        });
        reviewsList.parentNode.insertBefore(nextReviewButton, reviewsList);
      }

      updateReview(reviewIndex);
    })
    .catch((error) => console.error("Error:", error));
}

function traducirTexto(texto, idiomaDestino, claveAPI) {
  // URL de la API de traducción
  const url = `https://api.traduccion.ejemplo/v1?texto=${encodeURIComponent(texto)}&idiomaDestino=${idiomaDestino}`;

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${claveAPI}`
    }
  })
    .then(response => response.json())
    .then(data => data.traduccion);
}
