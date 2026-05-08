import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mm/', 
  plugins: [
    react({
      // 显式指定不要使用自动导入，或者强制指定 jsxRuntime
      jsxRuntime: 'automatic', 
    })
  ],
  // 如果还是报错，尝试加上这个
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
})