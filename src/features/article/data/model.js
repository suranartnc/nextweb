import * as API from './api'

export function getLatestArticles() {
  return API.getArticles({ limit: 5 })
}

export function getArticleDetail({ id }) {
  return API.getArticle({ id })
}
