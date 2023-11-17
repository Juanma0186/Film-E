/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css}",
  ],
  theme: {
    extend: {
      colors: {
        rojo: "#FF2853",
        azul: "#3DA6FC",
        verde: "#21CC78",
        amarillo: "#F7FB39",
        gris: "#C2C2C2",
        negro: "#151515",
        blanco: "#F1F1F1",
        morado:"#94043B"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}