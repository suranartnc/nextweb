import * as repository from './repository'

export function getArticles({ keyword, start = 0, limit = 5 } = {}) {
  return repository.find({ q: keyword, start, limit })
}

export function getArticleById(id) {
  return repository.findOneById(id)
}
