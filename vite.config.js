import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Set host to true to expose the server to your local network
    host: true
  },
  build: {
    outDir: 'dist',
    publicDir: 'public',
  },
})
