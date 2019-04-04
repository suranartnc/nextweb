const jsonServer = require('json-server')
const db = require('./db')

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

const port = 3001
const delay = 500

server.use(middlewares)
server.use((req, res, next) => {
  setTimeout(() => {
    next()
  }, delay)
})
server.use(router)

server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`)
})
