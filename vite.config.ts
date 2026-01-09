import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import iconsPlugin from 'unplugin-icons/vite'
import { generateCssModuleScopedName } from './utils/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    iconsPlugin({
      compiler: 'vue3'
    })
  ],

  css: {
    modules: {
      generateScopedName: generateCssModuleScopedName
    }
  }
})
