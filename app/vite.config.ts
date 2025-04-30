import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  server: {
    port: 3000
  },
  test: {
    globals: true,
    environment: 'jsdom',
    onConsoleLog: () => false,
    coverage: {
      include: [
        'src/widget/components/*',
        'src/widget/core/helpers/*'
      ],
      exclude: [
        ...configDefaults.exclude,
        'src/widget/components/Root/*'
      ]
    },
    setupFiles: './testSetup.tsx'
  }
})
