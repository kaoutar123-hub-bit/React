import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  optimizeDeps: {
    include: ['laravel-echo', 'pusher-js']
  },
  build: {
    commonjsOptions: {
      include: [/laravel-echo/, /pusher-js/, /node_modules/]
    }
  }
})