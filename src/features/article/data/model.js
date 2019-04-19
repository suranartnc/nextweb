import * as API from './api'

export function getLatestArticles() {
  return API.getArticles({ limit: 5 })
}

export function getArticles({ start = 0, limit = 5 }) {
  return API.getArticles({ start, limit })
}

export function getArticleDetail({ id }) {
  return API.getArticle({ id })
}
