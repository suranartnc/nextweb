const jsonServer = require('json-server')
const db = require('./db')

const port = 3001

const server = jsonServer.create()
const router = jsonServer.router(db())

server.use(jsonServer.defaults())
server.use(router)

server.listen(port)

console.log(`API server listening on http://localhost:${port}`)
