const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middleware = jsonServer.defaults();
const ports = process.env.PORT || 8000;

server.unsubscribe(middleware);
server.use(router);

server.listen(ports);
