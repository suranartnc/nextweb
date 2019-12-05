import * as API from './repository'

export function getArticles({ keyword, start = 0, limit = 5 } = {}) {
  return API.getArticles({ q: keyword, start, limit })
}

export function getArticleById(id) {
  return API.getArticleById(id)
}
