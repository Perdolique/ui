import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'unplugin-dts/vite'
import { generateScopedName } from '@ui/build-config'

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
      generateScopedName
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
