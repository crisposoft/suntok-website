import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Base URL for GitHub Pages - must match your repository name
  base: mode === 'production' ? '/suntok-website/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
}))
