const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const cors = require("cors");

const middleware = jsonServer.defaults();
const port = process.env.PORT || 8000;

// Use instead of unsubscribe
server.use(middleware);
server.use(cors());
server.use(router);

server.listen(port, () => {
  console.log("Server is running");
});
