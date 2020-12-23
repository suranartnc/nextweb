import trimStart from 'lodash/trimStart'
import trimEnd from 'lodash/trimEnd'

export function getStatic(path) {
  return `${trimEnd(process.env.STATIC_PREFIX, '/')}/${trimStart(path, '/')}`
}
