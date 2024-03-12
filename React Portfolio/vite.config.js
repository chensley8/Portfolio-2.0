import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'React_Portfolio',
  plugins: [react()],
  server: {
    port: 3002,
    open: true
  }
})
