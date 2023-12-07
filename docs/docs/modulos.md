# Importación y Exportación en JavaScript

También conocida como sintaxis de módulos EcmaScript (ESM), permite importar y exportar clases, funciones, componentes, constantes y cualquier otra variable de JavaScript entre un archivo JavaScript y otro.

Esta función permite organizar el código JavaScript en archivos pequeños. Facilita el uso compartido, la mejora, la gestión y la depuración del código según lo requiera la fase de desarrollo.

## Cómo funciona la exportación de JavaScript

Esta función crea un efecto visual al resaltar el área alrededor de los elementos de la barra de navegación cuando el mouse entra en ellos. También maneja la visibilidad del menuBackdrop y la clase .activado para garantizar un comportamiento adecuado al entrar y salir del área de navegación.

```javascript
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

## Cómo funciona la importación de JavaScript

Esta función centraliza la inicialización de la barra de navegación y otras funcionalidades relacionadas, como el modo oscuro y la interacción con el menú móvil. La modularidad y la organización del código se mejoran al dividir estas funciones en módulos separados y luego importarlas y utilizarlas según sea necesario.

```javascript
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

<span style="color:red; font-size:40px">¡Importante!</span>

El atributo **type="module"** es crucial para que los navegadores modernos traten el script como un módulo de JavaScript1. Este atributo permite que se utilicen las declaraciones import y export dentro del script.


Si no se incluye type="module", salta un error al usar import o export
```javascript
<script type="module" src="script.js"> </script>
```