const path = require('path')
const express = require('express')
const { parse } = require('url')
const next = require('next')
const favicon = require('serve-favicon')
const useragent = require('express-useragent')
const routes = require('./router')

const port = process.env.PORT || 80

const app = next({
  dev: process.env.NODE_ENV !== 'production',
})

const handle = routes.getRequestHandler(app)

const rootStaticFiles = ['/service-worker.js', '/manifest.json']

app.prepare().then(() => {
  const server = express()

  server.use(favicon(path.join(__dirname, 'static', 'favicon.ico')))
  server.use(useragent.express())

  server.get('*', function(req, res) {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    if (rootStaticFiles.indexOf(pathname) > -1) {
      const filePath = path.join(__dirname, '.next', pathname)
      app.serveStatic(req, res, filePath)
    } else {
      handle(req, res)
    }
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
