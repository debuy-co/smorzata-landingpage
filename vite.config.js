import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base relativa: funziona sia su github pages (smorzata.com) sia in locale
export default defineConfig({
  base: "./",
  plugins: [react()],
});
