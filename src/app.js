const express = require("express");
const config = require("config");

class App {
  constructor() {
    this.app = express();
    this.port = config.get("port");
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
  }
  listen() {
    this.app.listen(this.app.get("port"), () => {
      console.log("🚀 listening on port:", Number(this.app.get("port")));
    });
  }
}

module.exports = App;
