const App = require("./src/app.js");

class Main {
  constructor() {
    this.app = new App();
  }
  init() {
    this.app.listen();
  }
}

new Main().init();
