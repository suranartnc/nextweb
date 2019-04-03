import * as API from './api'

export function getLatestArticles() {
  return API.getArticles({ limit: 1 })
}
