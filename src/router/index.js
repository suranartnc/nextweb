const nextRoutes = require('next-routes')
const { get } = require('lodash')
const routes = nextRoutes()

const main = require('./routes/_main')

const allRoutes = [...main]

allRoutes.forEach(function({ name, pattern, page }) {
  routes.add(name, pattern, page)
})

routes.routes = routes.routes.map(function addOptionsEachRoute(route) {
  const routeFromSearchAllRoutes = allRoutes.find(function findRouteFromName(
    r,
  ) {
    return r.name === route.name
  })
  const options = get(routeFromSearchAllRoutes, 'options')
  typeof options !== 'undefined' && (route.options = options)
  return route
})

module.exports = routes
