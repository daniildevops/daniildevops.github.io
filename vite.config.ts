import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main:        resolve(__dirname, 'index.html'),
        equipment:   resolve(__dirname, 'equipment.html'),
        production:  resolve(__dirname, 'production.html'),
        reviews:     resolve(__dirname, 'reviews.html'),
        news:        resolve(__dirname, 'news.html'),
        contacts:    resolve(__dirname, 'contacts.html'),
      },
    },
  },
})
