const patterns = require('./_patterns')

module.exports = [
  {
    pattern: `/article/:id(${patterns.id})`,
    name: 'article-detail',
  },
]
