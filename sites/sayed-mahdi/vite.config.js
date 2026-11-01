import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Its own app, served at /sayed-mahdi/ and built into the shared dist folder.
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: '/sayed-mahdi/',
  plugins: [react()],
  build: { outDir: '../../dist/sayed-mahdi', emptyOutDir: true },
})
