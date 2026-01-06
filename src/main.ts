import { createApp } from 'vue'
import '@ui/theme'
import App from './App.vue'

// FIXME: false-positive ESLint warning
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
createApp(App).mount('#app')
