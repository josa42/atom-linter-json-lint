'use babel'

import JSONLint from 'json-lint'
const { atom } = global

export default {

  name: 'json-lint',

  grammarScopes: ['source.json'],

  scope: 'file',

  lintsOnChange: true,

  lint (textEditor) {
    return new Promise((resolve, reject) => {
      var lint = JSONLint(textEditor.getText(), {
        comments: atom.config.get('linter-json-lint.allowComments')
      })

      const messages = []

      if (lint.error) {
        let lineIdx = lint.line - 1
        let columnIdx = Math.max(0, lint.character - 1)
        messages.push({
          severity: 'error',
          location: {
            file: textEditor.getPath(),
            position: [[lineIdx, columnIdx], [lineIdx, columnIdx + 1]]
          },
          description: lint.error
        })
      }

      resolve(messages)
    })
  }
}
