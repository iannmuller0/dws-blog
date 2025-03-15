// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
      setupFiles: ['./setup-tests.ts'],
      globals: true,
      environment: 'jsdom',
    },
})