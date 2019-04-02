const nextRoutes = require('next-routes')
const routes = nextRoutes()

const main = require('./routes/_main')

const allRoutes = [...main]

allRoutes.forEach(function({ name, pattern, page }) {
  routes.add(name, pattern, page)
})

module.exports = routes
