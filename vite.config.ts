import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // --- 关键修改：添加 base 路径 ---
  base: '/mm/', 

  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  // 这里的 glb 对你的博物馆 3D 模型非常重要，保留它
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.glb'],
  
  server: {
    port: 5174,
    host: true
  },

  // --- 额外保险：防止之前出现的 jsx-runtime 错误 ---
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
})