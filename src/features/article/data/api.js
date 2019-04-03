import { fetchAPI } from '@lib/api'

export function getArticles() {
  return fetchAPI({ path: '/articles' })
}
