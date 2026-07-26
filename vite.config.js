import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  build: { chunkSizeWarningLimit: 1000 },
    plugins: [
        { enforce: 'pre', ...mdx() },
        react()
    ],
})
