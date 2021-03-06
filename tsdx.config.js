const postcss = require('rollup-plugin-postcss')
const cjs = require('rollup-plugin-cjs-es')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: true,
        extract: !!options.writeMeta,
      })
    ),
      config.plugins.push(
        cjs({
          nested: true,
        })
      )
    return config
  },
}
