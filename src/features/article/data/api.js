import { fetchAPI } from '@lib/api'

export function getArticles({ q, start, limit }) {
  return fetchAPI({
    path: '/articles',
    params: { q, _start: start, _limit: limit },
  })
}
