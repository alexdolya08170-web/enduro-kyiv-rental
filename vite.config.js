import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  
  plugins: [
    react(),
  ],
  
  server: {
    open: true,
    port: 3000, 
    strictPort: false, 
    cors: true,
  },
  
  build: {
    sourcemap: true,
    target: 'esnext',
    outDir: 'dist', 
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})