const postcss = require('postcss')

module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    textColor: ['dark'],
    backgroundColor: ['dark'],
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant('dark', ({ container, separator }) => {
        const colorSchemeRule = postcss.atRule({
          name: 'media',
          params: '(prefers-color-scheme: dark)',
        })
        colorSchemeRule.append(container.nodes)
        container.append(colorSchemeRule)
        colorSchemeRule.walkRules(rule => {
          rule.selector = `.${e(`dark${separator}${rule.selector.slice(1)}`)}`
        })
      })
    },
  ],
}
