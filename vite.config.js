import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Markdown from 'vite-plugin-react-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/AishwaryVidyaNiketen",
  plugins: [react(),Markdown(),
    react({
      include:[/\.tsx$/, /\.md$/]
    })

  ],
})
