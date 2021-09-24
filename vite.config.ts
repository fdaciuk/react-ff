import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsConfigpaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import { EsLinter, linterPlugin } from 'vite-plugin-linter'

// https://vitejs.dev/config/
export default defineConfig(configEnv => ({
  plugins: [
    reactRefresh(),
    tsConfigpaths(),
    linterPlugin({
      include: ['./{lib,src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ['lib/ff.tsx'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/lib', ''),
        content,
      }),
    }),
  ],
  esbuild: {
    jsxInject: 'import * as React from "react"',
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
}))
