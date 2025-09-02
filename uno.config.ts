import { presetWind3 } from '@unocss/preset-wind3'
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'bbv': {
        'red': '#660000',
        'black': '#050505',
        'gray': {
          'light': '#F5F5F5',
          'medium': '#808080',
          'dark': '#000000',
        }
      }
    },
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'],
      'sans': ['Outfit', 'sans-serif'],
    },
  },
  presets: [
    presetWind3(),
  ],
})
