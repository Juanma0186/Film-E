# Búsqueda en Tiempo Real con jQuery y AJAX

El siguiente código se utiliza para implementar una funcionalidad de búsqueda en tiempo real en un proyecto web utilizando jQuery y AJAX. Aquí hay una explicación detallada de las partes clave del código:

## Importaciones y Selección de Elementos del DOM

```javascript
import { SEARCH_ALL } from "./config.js";
import * as utils from "./utilities.js";
import $ from "jquery";

const searchInput = $("#search-input");
const searchResults = $("#search-results");
```

## Solicitud al servidor con la URL de búsqueda y el término de búsqueda actual

En esta sección, se realiza una solicitud AJAX al servidor con la URL de búsqueda y el término actual ingresado por el usuario. La respuesta del servidor se procesa en la función success, actualizando dinámicamente el contenido del DOM con los resultados obtenidos.
```javascript

$.ajax({
  url: `${SEARCH_ALL}${query}`,
  success: (data) => {
    const results = data.results;
    // Procesamiento de resultados y actualización del DOM aquí
  },
});
```

## Iteración sobre los resultados de la búsqueda y construcción del HTML

En este bloque de código, se itera  sobre los resultados de la búsqueda y se construye los elementos HTML dinámicamente para cada resultado. Los resultados se agregan al contenedor de resultados (searchResults), proporcionando una interfaz de usuario atractiva
```javascript
results.forEach((result) => {
    searchResults.append(resultElement);
  // Construcción de elementos HTML para cada resultado aquí
});
```

## Función de debounce

Se proporciona una función de debounce para mejorar el rendimiento al limitar la frecuencia de ejecución de la función de búsqueda durante la entrada del usuario.

Este código en conjunto crea una experiencia de búsqueda en tiempo real eficiente y atractiva para los usuarios en un entorno web.
    [Más sobre debounce](https://www.freecodecamp.org/espanol/news/curso-debounce-javascript-como-hacer-que-tu-js-espere/)
```javascript
function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
```

## Cierre y Limpieza al Hacer Clic Fuera del Contenedor de Resultados

Finalmente, se configura un evento de clic en el documento para cerrar y limpiar el contenedor de resultados cuando se hace clic fuera de él. Esto mejora la experiencia del usuario al proporcionar una forma intuitiva de cerrar los resultados de búsqueda.

```javascript
// Configuramos el evento click para cerrar y limpiar el contenedor de resultados al hacer clic fuera de él
$(document).on("click", (event) => {
  if (!event.target.closest("#search-results")) {
    // Limpiamos los resultados y el campo de búsqueda al hacer clic fuera del contenedor
    searchResults.html("");
    document.getElementById("search-input").value = "";
    searchResults.addClass("hidden");
  }
});
```