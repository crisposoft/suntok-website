import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Base URL for GitHub Pages - change 'suntok' to your repository name
  base: mode === 'production' ? '/suntok/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
}))
