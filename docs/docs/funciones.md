# Funciones Comunes

## Importación y Exportación en JavaScript

También conocida como sintaxis de módulos EcmaScript (ESM), permite importar y exportar clases, funciones, componentes, constantes y cualquier otra variable de JavaScript entre un archivo JavaScript y otro.

Esta función permite organizar el código JavaScript en archivos pequeños. Facilita el uso compartido, la mejora, la gestión y la depuración del código según lo requiera la fase de desarrollo.

#### Cómo funciona la exportación de JavaScript

Esta función crea un efecto visual al resaltar el área alrededor de los elementos de la barra de navegación cuando el mouse entra en ellos. También maneja la visibilidad del menuBackdrop y la clase .activado para garantizar un comportamiento adecuado al entrar y salir del área de navegación.

```javascript title="navItemsHover.js"
export function navItemsHover() {
  const listItem = document.querySelectorAll(".nav-items a");
  const menuBackdrop = document.querySelector("#menu-backdrop");
  const activado = document.querySelector(".nav-items .activado");

  listItem.forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      if (activado) {
        activado.classList.remove("activado");
      }
      const { left, top, width, height } = event.target.getBoundingClientRect();

      menuBackdrop.style.setProperty("--left", `${left}px`);
      menuBackdrop.style.setProperty("--top", `${top}px`);
      menuBackdrop.style.setProperty("--width", `${width}px`);
      menuBackdrop.style.setProperty("--height", `${height}px`);

      menuBackdrop.style.opacity = "1";
      menuBackdrop.style.visibility = "visible";
    });

    item.addEventListener("mouseleave", () => {
      menuBackdrop.style.opacity = "0";
      menuBackdrop.style.visibility = "hidden";
      if (activado) {
        activado.classList.add("activado");
      }
    });
  });
}
```

#### Cómo funciona la importación de JavaScript

Esta función centraliza la inicialización de la barra de navegación y otras funcionalidades relacionadas, como el modo oscuro y la interacción con el menú móvil. La modularidad y la organización del código se mejoran al dividir estas funciones en módulos separados y luego importarlas y utilizarlas según sea necesario.

```javascript title="navbar.js"
import { toggleDarkMode } from "./modoOscuro";
import { navItemsHover } from "./navItemsHover";

export function navbar() {
  toggleDarkMode();
  navItemsHover();
  document
    .getElementById("mobile-menu-btn")
    .addEventListener("click", function () {
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.style.display =
        mobileMenu.style.display === "none" ? "block" : "none";
    });
}
```

<span style="color:red; font-size:25px">¡Importante!</span>

El atributo **type="module"** es crucial para que los navegadores modernos traten el script como un módulo de JavaScript. Este atributo permite que se utilicen las declaraciones import y export dentro del script.


Si no se incluye type="module", salta un error al usar import o export
```javascript
<script type="module" src="script.js"> </script>
```


## Modo Oscuro

Hemos implementado un modo oscuro que permite al usuario cambiar el color de la página a un color más oscuro, para que la vista no se canse tanto. Este modo se activa mediante el botón de cambio de modo que se encuentra en la barra de navegación.

Para comprobar que preferencia de color tiene el usuario, hemos utilizado el siguiente código:

```javascript
if (localStorage.getItem("dark-mode") === "dark" || (!("dark-mode" in localStorage))) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}
```

Guardamos las preferencias del usuario en el `localStorage` del navegador, y si no tiene ninguna preferencia, por defecto se activa el modo claro.

```javascript title="modoOscuro.js"
export function toggleDarkMode() {
  const btnSwitch = document.querySelector("#switch");

  btnSwitch.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    // Guardamos las preferencias del usuario en localStorage
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "dark");
    } else {
      localStorage.setItem("dark-mode", "light");
    }
  });

  // Obtenemos el modo actual para el botón
  if (localStorage.getItem("dark-mode") === "dark") {
    btnSwitch.classList.add("active");
  } else {
    btnSwitch.classList.remove("active");
  }
}
```

## Botón to Top

Hemos creado un botón que permite al usuario volver a la parte superior de la página con un solo click. Este botón se encuentra fijado en la parte inferior derecha de la pantalla, y aparece cuando el usuario hace scroll hacia abajo y desaparece cuando el usuario se encuentra en la parte más superior o cuando aún no ha realizado scroll.

Para ello, hemos utilizado el siguiente código:

```javascript title="toTop.js"
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
```

Deberemos importar y llamar a la función cada vez que el usuario haga scroll en la página, para ello, utilizaremos el siguiente código:

```javascript title="index.js"
import { toTop } from "./toTop";

window.onscroll = function () {
  toTop();
};
```

## Utilidades

Hemos creado un archivo `utilidades.js` que contiene funciones que se utilizan en varias partes de la web y que son útiles para convertir fecha, redondear números, etc.

#### roundAverage()

```javascript title="utilidades.js"
export function roundAverage(average) {
  return Math.round(average * 10);
}
```

#### convertMins()

```javascript title="utilidades.js"
export function convertMins(minutos) {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;
  // Devolver horas y minutos si hay horas, si no, solo minutos
  return horas ? `${horas}h ${minutosRestantes}min` : `${minutosRestantes}min`;
}
```

#### getYear()

```javascript title="utilidades.js"
export function getYear(date) {
  const dateObject = new Date(date);
  return dateObject.getFullYear();
}
```

#### formatDate()

```javascript title="utilidades.js"
export function formatDate(date) {
  const dateObject = new Date(date);

  // Obtener día, mes y año
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = getYear(date);
  // Crear una cadena con el formato deseado (DD-MM-YYYY)
  return `${day < 10 ? "0" : ""}${day}-${month < 10 ? "0" : ""}${month}-${year}`;
}
```

#### mostrarModal()

```javascript title="mostrarModal.js"
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
```

#### verTrailer()

```javascript title="verTrailer.js"
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

- ***Definición de constantes:*** La función define dos constantes, YOUTUBE_API_KEY y YOUTUBE_API_URL. YOUTUBE_API_KEY es la clave API de YouTube, y YOUTUBE_API_URL es la URL de la API de YouTube que se utilizará para buscar el tráiler de la película.

- ***Solicitud a la API de YouTube:*** La función realiza una solicitud a la API de YouTube utilizando la función fetch. La URL de la solicitud incluye el título de la película y la clave API.

- ***Procesamiento de la respuesta:*** La función procesa la respuesta de la API de YouTube. Extrae el ID del video del primer elemento en el array items de la respuesta.

- ***Mostrar el tráiler:*** La función obtiene un elemento con el ID “trailerContainer” y establece su contenido HTML a un iframe que muestra el tráiler de la película en YouTube. Luego, muestra un modal con el ID “trailerModal” que contiene el tráiler.

- ***Manejo de errores:*** Si ocurre un error durante la solicitud a la API de YouTube o el procesamiento de la respuesta, la función registra el error en la consola.


