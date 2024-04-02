import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@themes': '/src/themes',
      '@utils': '/src/utils',
      '@router': '/src/router',
      '@config': '/src/config',
      '@api': '/src/api',
      '@shared': '/src/shared',
      '@translation': '/src/translation',
      '@pages': '/src/pages',
    },
  },
  optimizeDeps: {
    extensions: ["cjs"]
  },
  server: {
    port: 3000,
  },
})
