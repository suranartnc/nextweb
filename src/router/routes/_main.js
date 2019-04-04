const routes = [
  {
    pattern: '/',
    name: 'home',
    page: 'index',
  },
  {
    pattern: '/article/:id',
    name: 'articleDetail',
    page: 'articleDetail',
  },
  {
    pattern: '/about',
    name: 'about',
    page: 'about',
  },
]

module.exports = routes
