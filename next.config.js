const path = require('path')
const serverless = process.env.ENV_SERVELESS;
const configServeless = serverless ? { target: serverless} : {};

module.exports = {
  ...configServeless,
  webpack(config, options) {
    const { dev } = options
    if (!dev) {
      config.devtool = 'source-map'
    }
    config.resolve.alias.components = path.join(__dirname, 'components')
    config.resolve.alias.static = path.join(__dirname, 'static')
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
};

