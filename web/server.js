const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('public/db.json')
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 3001

router.db._.id = 0;

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(router)

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})