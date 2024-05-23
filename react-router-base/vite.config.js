import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  resolve: {
    alias: [
      { find: "~/components", replacement: "/src/compnents" },
      { find: "~/lib", replacement: "/src/lib" },
      { find: "~/routers", replacement: "/src/routers" },
      { find: "~/routes", replacement: "/src/routes" },
    ],
  },
});
