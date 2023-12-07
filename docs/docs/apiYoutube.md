# API Youtube

La función verTrailer toma como argumento el título de una película y muestra su tráiler en un modal.
```javascript
export function verTrailer(movieTitle) {
  const YOUTUBE_API_KEY = "AIzaSyBa4JfbgovmH0oBE3jHBJSfqTxlBCP0sZM";
  const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${movieTitle} tráiler&type=video&key=${YOUTUBE_API_KEY}`;

  fetch(YOUTUBE_API_URL)
    .then((response) => response.json())
    .then((data) => {
      const videoId = data.items[0].id.videoId;
      const trailerContainer = document.getElementById("trailerContainer");
      trailerContainer.innerHTML = `
        <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>                `;
      document.getElementById("trailerModal").classList.remove("hidden");
      document.getElementById("trailerModal").classList.add("flex");
    })
    .catch((error) => console.error("Error:", error));
}
```

## Descripción de la función

- ***Definición de constantes:*** La función define dos constantes, YOUTUBE_API_KEY y YOUTUBE_API_URL. YOUTUBE_API_KEY es tu clave API de YouTube, y YOUTUBE_API_URL es la URL de la API de YouTube que se utilizará para buscar el tráiler de la película.

- ***Solicitud a la API de YouTube:*** La función realiza una solicitud a la API de YouTube utilizando la función fetch. La URL de la solicitud incluye el título de la película y la clave API.

- ***Procesamiento de la respuesta:*** La función procesa la respuesta de la API de YouTube. Extrae el ID del video del primer elemento en el array items de la respuesta.

- ***Mostrar el tráiler:*** La función obtiene un elemento con el ID “trailerContainer” y establece su contenido HTML a un iframe que muestra el tráiler de la película en YouTube. Luego, muestra un modal con el ID “trailerModal” que contiene el tráiler.

- ***Manejo de errores:*** Si ocurre un error durante la solicitud a la API de YouTube o el procesamiento de la respuesta, la función registra el error en la consola.