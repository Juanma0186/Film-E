# TailWind

## ¿Qué es TailWind?

TailWind es un _**framework de CSS**_ que nos permite maquetar nuestra web de una forma más rápida y sencilla, ya que nos proporciona una gran cantidad de clases que nos permiten darle estilos a nuestra web sin tener que escribir tanto CSS, las llamadas `utility classes`.

## ¿Por qué TailWind?

Hemos elegido TailWind porque como hemos dicho antes sirve para maquetar la web de una forma más rápida y sencilla, es mucho más flexibles que otros **_frameworks_** como Bootstrap, ya que nos permite crear nuestros propios estilos y no tener que ceñirnos a los que nos proporciona el **_framework_**, y además nos permite usar nuestros propios colores dentro de sus clases.

Ejemplo de una clase de TailWind:

```HTML
<div class="bg-white rounded-lg shadow-lg p-4">
  <p class="text-2xl">Hola mundo</p>
</div>
```

Ejemplo de una clase de TailWind _**personalizada**_:
```HTML
<div class="bg-azul-500 rounded-lg shadow-lg p-4">
  <p class="text-[48px]">Hola mundo</p>
</div>
```
Mediante unos **corchetes** podemos añadirle un tamaño personalizado a la clase, en este caso el tamaño de la fuente.

## Instalación de TailWind

Para instalar TailWind, nos dirigimos a la carpeta de nuestro proyecto y ejecutamos los siguientes comandos:

```bash
cd <nombre-proyecto>
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`npm install -D tailwindcss postcss autoprefixer` instalará las dependencias necesarias para que TailWind funcione correctamente.

`npx tailwindcss init -p` creará el archivo `tailwind.config.js` que nos permitirá configurar TailWind.

Después solo deberemos añadir el siguiente código en el archivo style.css que se encuentra en la carpeta `src/css` y vincularlo en los archivos `*.html`:

```css title="style.css"
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Configuración de TailWind

El archivo `tailwind.config.js` se creará en la raíz de nuestro proyecto y tendrá la siguiente estructura:

```js title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    extend: {
        colors: {
            // ...
        },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animated")
  ],
};

```

- Lo primero que hemos hecho en este archivo es cambiar el modo de color a `darkMode: "class"`, ya que nuestra web está diseñada para que se vea en modo oscuro y que el usuario pueda cambiarlo a modo claro si lo desea, ya que por defecto TailWind incorpora la función para que reconozca las preferencias del sistema sin opción a cambiarlo.
- En `content` hemos añadido los archivos que queremos que TailWind tenga en cuenta para compilar los estilos.
- En `theme` hemos añadido la configuración de los colores (_explicado abajo_) y las fuentes que queremos utilizar en nuestra web(_incluidas en la carpeta **fonts**_).
- Además hemos añadido el plugin `tailwindcss-animated` para poder utilizar animaciones en nuestra web.
- En nuestro caso hemos utilizado los colores de la siguiente paleta creada por nosotros y adaptada al objetivo de nuestra web:
  
    [![COLORES](https://img.shields.io/badge/colores-%234285F4.svg?style=for-the-badge)](https://coolors.co/151515-c2c2c2-f1f1f1-3da6fc-21cc78-f7fb39-ff2853)

    Hemos usado la web de [Coolors](https://coolors.co/) para crear nuestra paleta de colores, ya que te permite exportar los colores a TailWind, ofreciéndote las variables de cada color (100-900) y facilitándonos el trabajo.

    Así sería la configuración de los **colores** en el archivo `tailwind.config.js`:
  
```js title="tailwind.config.js"
colors: {
        negro: {
          DEFAULT: "#151515",
          100: "#040404",
          200: "#080808",
          300: "#0c0c0c",
          400: "#101010",
          500: "#151515",
          600: "#434343",
          700: "#727272",
          800: "#a1a1a1",
          900: "#d0d0d0",
        },
        gris: {
          DEFAULT: "#c2c2c2",
          100: "#272727",
          200: "#4e4e4e",
          300: "#747474",
          400: "#9b9b9b",
          500: "#c2c2c2",
          600: "#cecece",
          700: "#dadada",
          800: "#e7e7e7",
          900: "#f3f3f3",
        },
        blanco: {
          DEFAULT: "#f1f1f1",
          100: "#303030",
          200: "#616161",
          300: "#919191",
          400: "#c2c2c2",
          500: "#f1f1f1",
          600: "#f5f5f5",
          700: "#f7f7f7",
          800: "#fafafa",
          900: "#fcfcfc",
        },
        azul: {
          DEFAULT: "#3da6fc",
          100: "#01223d",
          200: "#02447b",
          300: "#0366b8",
          400: "#0489f5",
          500: "#3da6fc",
          600: "#62b7fd",
          700: "#89c9fd",
          800: "#b1dbfe",
          900: "#d8edfe",
        },
        verde: {
          DEFAULT: "#21cc78",
          100: "#072818",
          200: "#0d5130",
          300: "#147948",
          400: "#1aa160",
          500: "#21cc78",
          600: "#42e093",
          700: "#71e8ae",
          800: "#a0f0c9",
          900: "#d0f7e4",
        },
        amarillo: {
          DEFAULT: "#f7fb39",
          100: "#3b3c01",
          200: "#767802",
          300: "#b1b404",
          400: "#ecf005",
          500: "#f7fb39",
          600: "#f9fc5f",
          700: "#fbfd87",
          800: "#fcfdaf",
          900: "#fefed7",
        },
        rojo: {
          DEFAULT: "#ff2853",
          100: "#3b000c",
          200: "#760018",
          300: "#b10023",
          400: "#ed002f",
          500: "#ff2853",
          600: "#ff5476",
          700: "#ff7e98",
          800: "#ffa9ba",
          900: "#ffd4dd",
        },
      },
```

