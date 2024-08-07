import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import { input } from 'styled-system/recipes';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: 'red',
      grayColor: 'mauve',
      borderRadius: 'xl',
      additionalColors: ['blue', 'green']
    })
  ],

  // Where to look for your css declarations
  include: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/app/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {}
  },

  staticCss: {
    recipes: {
      input: [
        {
          size: ['*']
        }
      ]
    }
  },

  lightningcss: true,

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework: 'react'
});
