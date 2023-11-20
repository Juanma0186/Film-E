import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/src/login.html",
  },
  build: {
    outDir: "../dist",
    assetsDir: "./",
  },
});
