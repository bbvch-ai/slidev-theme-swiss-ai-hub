import { defineShikiSetup } from '@slidev/types'

import type { ShikiSetupReturn } from '@slidev/types'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      dark: 'github-dark-high-contrast',
      light: 'github-light-high-contrast',
    },
  }
})
