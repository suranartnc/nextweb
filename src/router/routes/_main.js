const patterns = {
  slug: '[A-Za-z0-9-%_]+',
  id: '[1-9][0-9]*',
}

const routes = [
  {
    pattern: '/',
    name: 'home',
    page: 'index',
  },
  {
    pattern: `/article/:id(${patterns.id})`,
    name: 'article-detail',
    page: 'article-detail',
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
  {
    pattern: '/account',
    name: 'account',
    page: 'account',
  },
]

module.exports = routes
