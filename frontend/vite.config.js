import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative asset paths so the build works when served from a subpath
  // (e.g. Streamlit's static file serving at /app/static/).
  base: './',
})
