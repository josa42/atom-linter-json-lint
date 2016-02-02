"use babel"

import LinterJsonLintProvider from './linter-json-lint-provider'

export default {

  config: {
    allowComments: {
      type: 'boolean',
      default: false
    }
  },

  activate() {
    if (!atom.inSpecMode()) {
      require('atom-package-deps')
    }
  },

  provideLinter: () => LinterJsonLintProvider
}
