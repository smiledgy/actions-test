module.exports = {
  transpileDependencies: true,
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/actions-test/' : '/'
}
