import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Its own app, served at /gulf-avenues/ and built into the shared dist folder.
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: '/gulf-avenues/',
  plugins: [react()],
  build: { outDir: '../../dist/gulf-avenues', emptyOutDir: true },
})
