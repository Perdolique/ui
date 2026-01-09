// oxlint-disable no-unsafe-member-access, no-unsafe-argument
import { defineConfig, globalIgnores } from 'eslint/config'
import { configs } from 'eslint-config-greenpie'

export default defineConfig(
  globalIgnores([
    '**/dist'
  ]),

  ...configs.default,
  ...configs.vue,

  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],

    rules: {
      '@stylistic/semi': ['error', 'never']
    }
  },

  {
    files: ['**/*.vue'],

    rules: {
      'vue/no-bare-strings-in-template': 'off',

      'vue/block-lang': ['error', {
        script: {
          lang: 'ts'
        },

        style: {
          lang: 'css'
        }
      }],

      'vue/enforce-style-attribute': ['error', {
        allow: ['module']
      }]
    }
  }
)
