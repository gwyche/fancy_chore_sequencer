import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Enable Vite to listen on all network interfaces
    port: 5180,
    hmr: {
      clientPort: 5180, // Ensure HMR works by pointing to the correct port
    },
    watch: {
      usePolling: true,  // Use polling for file changes in Docker
    },
  },
})
