import { trimStart, trimEnd } from 'lodash'

export function getStatic(path) {
  return `${trimEnd(process.env.STATIC_PREFIX, '/')}/${trimStart(path, '/')}`
}
