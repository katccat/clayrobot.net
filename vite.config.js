import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imageDimensions from './vite-plugins/image-dimensions'
import ogPreviews from './vite-plugins/og-previews'
import { INAR_APPSTORE } from './src/consts.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imageDimensions(), ogPreviews([INAR_APPSTORE])],
  server: {
    host: true,
    allowedHosts: true
  }
})
