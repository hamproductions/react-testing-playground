import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', {}]]
      }
    })
  ],
  test: {
    environment: 'jsdom',
    css: process.env.TEST_PREVIEW === 'true',
    // testTimeout: process.env.CI === 'true' ? 5000 : 10000,
    // environmentOptions: {
    //   jsdom: {}
    // },
    isolate: true,
    setupFiles: ['./vitest-setup.ts'],
    coverage: {
      provider: 'v8',
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['text', 'json-summary', 'json', 'html'],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
      exclude: [
        '*.config.*',
        '+config.ts',
        'scripts',
        '**/*.d.ts',
        'styled-system/*',
        '*/__test__/*',
        '*/components/ui/*',
        '*/theme/*',
        '.next'
      ]
    },
    outputFile: {
      'json-summary': './coverage-summary.json'
    },
    exclude: [...configDefaults.exclude]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      'styled-system': path.resolve(__dirname, './styled-system/')
    }
  }
});
