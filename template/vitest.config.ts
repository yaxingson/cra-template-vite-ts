import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test:{
    dir:'tests',
    globals:true,
    watch:false,
    alias:{
      "@": resolve(__dirname, './src')
    },
    coverage:{
      provider:'istanbul'
    }
  },
})
