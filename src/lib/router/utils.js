import { get } from 'lodash'
import Routes from './index'

export function getFullUrlByRoute(routeName, params) {
  return Routes.findByName(routeName).getAs(params)
}

export function getRouteName(asPath) {
  const hostname = process.env.HOST
  const path = asPath.replace(hostname, '')
  const matchedRoute = Routes.match(path)
  return get(matchedRoute, 'route.name')
}

export function getQueryValue(asPath, key) {
  const matchedRoute = Routes.match(asPath)
  return get(matchedRoute, `query.${key}`)
}
