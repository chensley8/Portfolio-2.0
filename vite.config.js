import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  server: {
    port: 3002,
    open: true
  },
  resolve: {
    alias: {
      'postcss': path.resolve(__dirname, 'node_modules/postcss/lib/postcss.js')
    },
  },
})
