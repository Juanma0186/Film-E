import { defineConfig } from "vite";
import path from "path";
import glob from "glob";

export default defineConfig({
  root: "src",
  base: "./", // Puedes ajustar esto según tus necesidades
  mode: "development", // Puedes cambiar a "production" para producción
  envDir: "../",
  publicDir: "../public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "src/*.html")), // Lee todos los archivos HTML en la carpeta src
    },
    outDir: "../dist",
    assetsDir: "./img",
    manifest: true, // Genera un archivo manifest para los assets
  },
});
