const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const cors = require("cors");

const middleware = jsonServer.defaults();
const ports = process.env.PORT || 8000;

server.unsubscribe(middleware);
server.use(router);
server.use(cors());

server.listen(ports, () => {
  console.log("Server is running");
});
