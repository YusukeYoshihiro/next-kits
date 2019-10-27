import path from 'path'
const serverless = process.env.ENV_SERVELESS;
const configServeless = serverless ? { target: serverless} : {};

module.exports = {
  ...configServeless,
  dir: './',
  webpack(config, options) {
    const { dev } = options
    if (!dev) {
      config.devtool = 'source-map'
    }
    config.resolve.alias.components = path.join(__dirname, 'components')
    config.resolve.alias.static = path.join(__dirname, 'static')
    config.resolve.modules = [path.join(__dirname), 'node_modules']
    console.log(config.resolve.modules);
    config.resolve.extensions = [
      '.ts',
      '.tsx',
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

