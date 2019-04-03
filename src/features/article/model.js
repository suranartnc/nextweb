import { fetchAPI } from '@lib/api'

export function loadArticles() {
  return fetchAPI({ path: '/articles' })
}
