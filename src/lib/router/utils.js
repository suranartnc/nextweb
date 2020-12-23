import trimStart from 'lodash/trimStart'
import routes from '@modules/_router'

export function getAsPathByRouteName(route, params = {}) {
  const pathname = routes[route]
  return getAsPathByPathName(pathname, params)
}

export function getAsPathByPathName(pathname, params = {}) {
  let unusedParams = ''

  const asPath = Object.keys(params).reduce((prev, cur) => {
    const inUsed = pathname.indexOf(`[${cur}]`)
    if (inUsed === -1) {
      unusedParams = unusedParams + `&${cur}=${params[cur]}`
    }

    return `${prev.replace(`[${cur}]`, params[cur])}`
  }, pathname)

  const queryString =
    unusedParams !== '' ? '?' + trimStart(unusedParams, '&') : ''

  return `${asPath}${queryString}`
}

export function getHrefByRouteName(route, params = {}) {
  return { pathname: routes[route], query: params }
}

export function getRouteByPathname(pathname) {
  let instantPathname = pathname

  if (pathname.substr(-1) !== '/') instantPathname = pathname + '/'

  return Object.keys(routes).find(key => routes[key] === instantPathname)
}
