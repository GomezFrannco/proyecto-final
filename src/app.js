const express = require("express");
const config = require("config");
const { log } = require("./utils/log4js.utils");
const usersRouter = require('./routes/user.routes');
const productsRouter = require('./routes/products.routes');

class App {
  constructor() {
    this.app = express();
    this.port = config.get("server").port;
    this.settings();
    this.middlewares();
    this.routes();
  }
  settings() {
    this.app.set("port", this.port);
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  routes() {
    this.app.use(usersRouter);
    this.app.use(productsRouter);
  }
  listen() {
    this.app.listen(this.app.get("port"), () => {
      log.console.info(`🚀 listening on port: ${this.app.get("port")}`);
    });
  }
}

module.exports = App;
