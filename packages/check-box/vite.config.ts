import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'unplugin-dts/vite'
import { createHash, type BinaryLike } from 'crypto'
import { basename } from 'path'

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
      generateScopedName(className: string, filename: string, data: BinaryLike) : string {
        const hash = createHash('sha256')
          .update(data)
          .digest('hex')
          .slice(0, 6)

        const filePath = filename
          .replace(/\.vue(?:\?.+?)?$/u, '')
          .replace(/\[|\]/gu, '')

        const baseName = basename(filePath)

        return `${baseName}_${className}_${hash}`
      }
    }
  },

  build: {
    lib: {
      entry: 'index.ts',
      formats: ['es']
    },

    rollupOptions: {
      external: [
        '@iconify/vue',
        'reka-ui',
        'vue'
      ]
    },

    emptyOutDir: true
  }
})
