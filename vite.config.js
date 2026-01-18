import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/resume/',

    // Build optimizations
    build: {
        // Enable source maps for production debugging (optional, can be disabled for smaller bundles)
        sourcemap: false,

        // Minify options
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // Remove console.log in production
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.info', 'console.debug'],
            },
        },

        // Chunk splitting for better caching
        rollupOptions: {
            output: {
                manualChunks: {
                    // Separate vendor chunks for better caching
                    'gsap-vendor': ['gsap', '@gsap/react'],
                    'react-vendor': ['react', 'react-dom'],
                    'ui-vendor': ['lucide-react'],
                },
                // Asset naming for cache busting
                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]',
            },
        },

        // Chunk size warning limit
        chunkSizeWarningLimit: 500,

        // CSS code splitting
        cssCodeSplit: true,

        // Target modern browsers for smaller bundle
        target: 'es2020',
    },

    // Dependencies optimization
    optimizeDeps: {
        include: ['gsap', '@gsap/react', 'react', 'react-dom', 'lucide-react', 'lenis'],
    },

    // Server configuration
    server: {
        port: 3000,
        host: true,
    },

    // Preview server configuration
    preview: {
        port: 3000,
        host: true,
    },
})
