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
  {
    pattern: '/login',
    name: 'login',
    page: 'login',
  },
]

module.exports = routes
