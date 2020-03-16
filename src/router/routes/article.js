const patterns = require('../patterns')

module.exports = [
  {
    pattern: `/article/:id(${patterns.id})`,
    name: 'article-detail',
  },
]
