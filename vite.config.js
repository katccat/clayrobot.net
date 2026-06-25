import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imageDimensions from './vite-plugins/image-dimensions'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imageDimensions()],
  server: {
    host: true,
    allowedHosts: true
  }
})
