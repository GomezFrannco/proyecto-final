const express = require("express");
const config = require("config");
const { log } = require("./utils/log4js.utils");
const apiRoutes = require('./routes/index.routes.js');
const deserializeUser = require("./middlewares/deserialize.middlewares");

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
    this.app.use(express.static(__dirname + "/public"))
    this.app.use(deserializeUser);
  }
  routes() {
    this.app.use(apiRoutes);
  }
  listen() {
    this.app.listen(this.app.get("port"), () => {
      log.console.info(`🚀 listening on port: ${this.app.get("port")}`);
    });
  }
}

module.exports = App;
