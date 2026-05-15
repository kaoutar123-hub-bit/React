import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173
  },
  plugins: [
    react() // Quitamos el plugin de babel/compiler para asegurar estabilidad
  ],
  define: {
    // Esto evita que librerías antiguas busquen variables de Node.js
    'global': 'window',
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Crucial para que Pusher y Echo se lleven bien
    }
  }
})