import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import forms from '@tailwindcss/forms'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), forms()],
})
