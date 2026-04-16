// vite.config.ts
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { babel } from '@rolldown/plugin-babel'

// Конфигурация компилятора (опционально)
const ReactCompilerConfig = {
  
  // Постепенное внедрение:
  compilationMode: 'annotation', // 'all' | 'annotation' | 'infer'
  
  // Логирование для отладки:
  // logger: { logEvent: (filename, event) => console.log(filename, event) }
}

export default defineConfig({
  plugins: [
    babel({
      include: /\.[jt]sx?$/,
      babelConfig: {
        ...reactCompilerPreset(ReactCompilerConfig),
        // Дополнительные плагины Babel при необходимости:
        // plugins: ['@babel/plugin-proposal-throw-expressions'],
      },
    }),
    react(),
  ],
  
  // Дополнительные оптимизации
  build: {
    sourcemap: true, // Обязательно для отладки скомпилированного кода
    target: 'esnext',
  },
  
  //  Оптимизация зависимостей
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
})