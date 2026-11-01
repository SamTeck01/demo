import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Its own app, served at /ocean-club/ and built into the shared dist folder.
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: '/ocean-club/',
  plugins: [react()],
  build: { outDir: '../../dist/ocean-club', emptyOutDir: true },
})
