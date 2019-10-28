const path = require('path')
const express = require('express')
const compression = require('compression')
const next = require('next')
const favicon = require('serve-favicon')
const useragent = require('express-useragent')
const routes = require('./router')

const port = process.env.PORT || 3000

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev,
  dir: './src',
})
const handle = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use(
    compression({
      filter: function(req, res) {
        if (process.env.ASSET_PREFIX !== '') {
          return false
        }

        return compression.filter(req, res)
      },
    }),
  )

  server.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  server.use(useragent.express())

  server.use((req, res) => {
    handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
