import routes from '@modules/_router'

export function getAsPathByRouteName(route, params = {}) {
  const pathname = routes[route]
  return getAsPathByPathName(pathname, params)
}

export function getAsPathByPathName(pathname, params = {}) {
  return Object.keys(params).reduce(
    (prev, cur) => prev.replace(`[${cur}]`, params[cur]),
    pathname,
  )
}

export function getHrefByRouteName(route, params = {}) {
  return { pathname: routes[route], query: params }
}
