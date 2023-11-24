import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://kaiohhdias.github.io/kaiodias.me/",
  plugins: [react()],
});
