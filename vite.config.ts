import preact from '@preact/preset-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), preact()],
  server: {
    port: 3000
  },
  test: {
    globals: true,
    environment: 'jsdom',
    onConsoleLog: () => false,
    include: [
      'src/widget/core/helpers/validation.test.tsx'
    ],
    exclude: [
      ...configDefaults.exclude,
      'src/widget/components/*'
    ],
    coverage: {
      include: [
        'src/widget/core/helpers/validation.test.tsx'
      ],
      exclude: [
        ...configDefaults.exclude,
        'src/widget/components/*'
      ]
    },
    setupFiles: ['./testSetup.tsx']
  }
})
