import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Its own app, served at /cedar-park-living/ and built into the shared dist folder.
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: '/cedar-park-living/',
  plugins: [react()],
  build: { outDir: '../../dist/cedar-park-living', emptyOutDir: true },
})
