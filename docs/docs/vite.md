# Vite

## ¿Qué es Vite?

Vite es un _**bundler**_ o servidor de desarrollo local que permite crear aplicaciones web con Vue, React o JavaScript Vanilla (como en nuestro caso), entre otros.

Nos permite crear aplicaciones web con un _hot reload_ muy rápido, ya que permite ver los cambios de nuestro código en tiempo real sin tener que estar actualizando constantemente la web.

## Instalación de Vite

```bash
npm create-vite <nombre-proyecto>
```

Reemplazaremos `<nombre-proyecto>` por el nombre de nuestro proyecto.

## Iniciar Vite

Para inicializar Vite, nos dirigimos a la carpeta de nuestro proyecto y ejecutamos los siguientes comandos:

```bash
cd <nombre-proyecto>
npm install
npm run dev
```

`npm install` instalará todas las dependencias necesarias para que nuestro proyecto funcione correctamente.

`npm run dev` iniciará el servidor de desarrollo local. Podremos ver nuestra web en la dirección `http://localhost:3000`. El puerto podrá variar dependiendo de cuales estén disponibles.

## Estructura de Vite

La estructura de Vite es muy sencilla, ya que solo tenemos que preocuparnos de la carpeta `src`, donde se encuentra todo nuestro código.

Como mucho deberemos modificar el archivo `tailwind.config.js` que explicaremos en su apartado correspondiente ([Tailwind](tailwind.md)).

```bash title="Estructura del proyecto"
├── node_modules
├── public
├── src
│   ├── css
│   ├── fonts
│   ├── img
│   ├── script
│   ├── *.html
├── .gitignore
├── .eslintrc.json
├── .stylelintrc
├── package-lock.json
├── package.json
├── README.md
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
```
