
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'miri-dashboard-route',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/miri' || req.url === '/miri/') {
            req.url = '/miri/index.html'
          }
          next()
        })
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/miri' || req.url === '/miri/') {
            req.url = '/miri/index.html'
          }
          next()
        })
      },
    },
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
