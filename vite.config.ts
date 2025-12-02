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
        venue: resolve(__dirname, 'venue.html'),
        gift: resolve(__dirname, 'gift.html'),
        'invitation-code': resolve(__dirname, 'invitation-code.html'),
        'order-of-events': resolve(__dirname, 'order-of-events.html'),
        rsvp: resolve(__dirname, 'rsvp.html'),
      },
    },
  },
})