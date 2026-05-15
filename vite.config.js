import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173,
    hmr: {
      host: "localhost",
      protocol: "ws"
    }
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler']
      }
    })
  ],
})