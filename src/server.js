const path = require('path')
const express = require('express')
const next = require('next')
const favicon = require('serve-favicon')
const routes = require('./router')

const port = process.env.PORT || 3000

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: './src',
})

const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use(favicon(path.join(__dirname, 'static', 'favicon.ico')))

  server.get('*', function(req, res) {
    handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
