import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

function htmlPartials() {
  return {
    name: 'html-partials',
    transformIndexHtml(html: string) {
      return html.replace(/<include src="([^"]+)"><\/include>/g, (match, src) => {
        try {
          return fs.readFileSync(resolve(__dirname, src), 'utf-8')
        } catch (e) {
          console.error(`Could not load partial: ${src}`);
          return match;
        }
      })
    }
  }
}

export default defineConfig({
  root: '.',
  base: './',
  plugins: [htmlPartials()],
  build: {
    outDir: 'public_html',
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
