import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // server: {
  //           host: '127.0.0.1' // or '0.0.0.0' for external access
  //         }
  build: {
    outDir: 'docs',
  },
})
