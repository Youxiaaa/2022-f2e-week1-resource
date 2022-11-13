import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

export default defineConfig({
  base: '/2022-f2e-week1/',
  plugins: [
    vue(),
    Unocss({})
  ]
})
