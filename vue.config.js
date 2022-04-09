module.exports = {
  devServer: {
    proxy: {
      '/wagnyiAPI': {
        target: 'http://www.codeman.ink:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/wagnyiAPI': ''
        }
      }
    }
  }
}
