const authRoutes = require('./_auth')
const articleRoutes = require('./article')

const routes = [
  {
    pattern: '/',
    name: 'home',
    page: 'index',
  },

  {
    pattern: '/about',
    name: 'static-about',
  },

  ...authRoutes,
  ...articleRoutes,
]

module.exports = routes
