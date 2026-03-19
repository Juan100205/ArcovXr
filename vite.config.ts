import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],

  base: "/",

  build: {
    // Umbral de advertencia para chunks: 600kb
    chunkSizeWarningLimit: 600,

    // Minificación con esbuild (default, más rápido que terser)
    minify: 'esbuild',

    // Separación manual de chunks por vendor para cache-busting óptimo
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — cambia muy poco, se cachea agresivamente
          'vendor-react': ['react', 'react-dom'],

          // Router separado del core de React
          'vendor-router': ['react-router-dom'],

          // Framer Motion es el paquete más pesado del proyecto (~150kb gzip)
          'vendor-framer': ['framer-motion'],

          // Iconos separados para que no contaminen el bundle principal
          'vendor-icons': ['lucide-react', '@heroicons/react'],
        },
      },
    },

    // Sourcemaps solo en dev, no en producción
    sourcemap: false,
  },

  // Optimización de dependencias en dev (pre-bundling)
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
})
