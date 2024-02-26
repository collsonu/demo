import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://6592b142bb129707198ff2e7.mockapi.io'
    }
  },
  plugins: [react()],
})
