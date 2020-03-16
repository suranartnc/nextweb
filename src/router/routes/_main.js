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
    name: 'about',
    page: 'about',
  },

  ...authRoutes,
  ...articleRoutes,
]

module.exports = routes
