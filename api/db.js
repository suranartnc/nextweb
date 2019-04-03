var faker = require('faker')

function nlToBr(str) {
  return str.replace(/(?:\r\n|\r|\n)/g, '<br />')
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000)
  var interval = Math.floor(seconds / 31536000)
  if (interval > 1) {
    return interval + ' years'
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return interval + ' months'
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return interval + ' days'
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return interval + ' hours'
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return interval + ' minutes'
  }
  return Math.floor(seconds) + ' seconds'
}

function generateArticles(limit) {
  var articles = []

  for (var i = 0; i < limit; ++i) {
    var title = faker.lorem.sentence()

    articles.push({
      id: i + 1,
      title: title,
      excerpt: nlToBr(faker.lorem.paragraphs(2)),
      body: nlToBr(faker.lorem.paragraphs(10)),
      author: {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        avatar: faker.image.avatar(),
      },
      tags: title.replace('.', '').split(' '),
      pubDate: (function() {
        return `${timeSince(new Date(faker.date.recent(14)))} ago`
      })(),
    })
  }

  return articles
}

module.exports = {
  articles: generateArticles(20),
}
