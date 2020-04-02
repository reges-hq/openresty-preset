module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  assetsDir: 'assets',
  pluginOptions: {
    apollo: {
      lintGQL: false
    }
  }
}
