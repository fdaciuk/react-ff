import { resolve, dirname } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsConfigpaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsConfigpaths(),
    dts({
      include: ['lib/ff.tsx'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/lib', ''),
        content,
      }),
    }),
  ],
  esbuild: {
    jsxInject: `import * as React from 'react'`,
  },
  build: {
    lib: {
      entry: resolve('lib', 'ff.tsx'),
      name: 'ReactFeatureFlag',
      fileName: (format) => `ff.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
    },
  },
})
