const App = require("./src/app.js");
const MongoDBConnection = require("./src/utils/mongoose.utils.js");

class Main {
  constructor() {
    this.app = new App();
    this.db = MongoDBConnection.getInstance();
  }
  async init() {
    this.app.listen();
    await this.db.connectToMongo();
  }
}

new Main().init();
