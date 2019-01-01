const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  webpack(config, options) {
    const { dev } = options
    if (!dev) {
      config.devtool = 'source-map'
    }
    config.resolve.alias.components = path.join(__dirname, 'components')
    config.resolve.alias.static = path.join(__dirname, 'static')
    config.resolve.alias.store = path.join(__dirname, 'store')
    config.resolve.extensions = [
      '.js',
      '.jsx',
      '.css',
      '.png',
      '.jpg',
      '.gif',
      '.jpeg'
    ]
    return config
  },
  exportPathMap() {
    return {
      '/': { page: '/' }
    }
  }
})
