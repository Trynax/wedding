import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'order-of-events': resolve(__dirname, 'order-of-events.html'),
        'rsvp': resolve(__dirname, 'rsvp.html'),
      },
    },
  },
})