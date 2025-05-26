import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
    server: {
    proxy: {
      '/api': {
        target: 'https://testjob.checkport.ru', // 👈 https, даже если он редиректит
        changeOrigin: true,
        secure: false, // ⚠️ отключает проверку сертификата
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
