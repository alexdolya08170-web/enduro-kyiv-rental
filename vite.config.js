import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

const ReactCompilerConfig = {
  compilationMode: 'annotation',
}

export default defineConfig({
  plugins: [
    babel({
      include: /\.[jt]sx?$/,
      presets: [reactCompilerPreset(ReactCompilerConfig)],
    }),
    react(),
  ],
  build: {
    sourcemap: true,
    target: 'esnext',
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
})