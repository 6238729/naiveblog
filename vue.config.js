const { NODE_ENV, BASE_URL = '/naiveblog/' } = process.env

module.exports = {
  publicPath: NODE_ENV === 'production' ? BASE_URL : '/naiveblog/'
}
