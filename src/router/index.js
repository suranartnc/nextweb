const nextRoutes = require('next-routes')
const { trimEnd } = require('lodash')
const url = require('url')

const main = require('./routes/_main')

const routes = nextRoutes()
const allRoutes = [...main]

allRoutes.forEach(function({ name, pattern, page }) {
  routes.add(name, pattern, page)
})

routes.routes.forEach(function(route) {
  route._getAs = route.getAs
  route.getAs = function(params = {}) {
    const prefix = getPrefix()
    const path = `${prefix}${route._getAs(params)}`

    return trimEnd(path, '/') + '/'
  }
})

function getPrefix() {
  let prefix = ''

  if (!process.browser) {
    prefix = process.env.HOST || ''
  } else {
    const { host, hostname } = url.parse(document.URL)

    if (hostname === 'localhost') {
      prefix = `http://${host}`
    } else {
      prefix = `https://${hostname}`
    }
  }

  return prefix
}

module.exports = routes
