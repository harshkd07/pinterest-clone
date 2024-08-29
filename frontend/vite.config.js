import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // Explicitly specify the output directory
  },
  server:{
    proxy:{
      "/api":{
        target:"http://localhost:5000",
      }
    }
  }
})
