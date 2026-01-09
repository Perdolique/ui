import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'unplugin-dts/vite'
import { generateCssModuleScopedName } from '../../utils/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    dts({
      processor: 'vue',
      insertTypesEntry: true,
      cleanVueFileName: true,
      copyDtsFiles: true
    })
  ],

  css: {
    modules: {
      generateScopedName: generateCssModuleScopedName
    }
  },

  build: {
    lib: {
      entry: 'index.ts',
      formats: ['es']
    },

    rollupOptions: {
      external: [
        'vue'
      ]
    },

    emptyOutDir: true
  }
})
