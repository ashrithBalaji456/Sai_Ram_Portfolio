import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isVercel = Boolean(process.env.VERCEL);
  const base =
    process.env.VITE_BASE_PATH ||
    (isVercel || mode !== "production" ? "/" : "/Sai_Ram_Portfolio/");

  return {
    base,
    plugins: [react()],
    server: {
      port: 5188,
      strictPort: true,
    },
  };
});
