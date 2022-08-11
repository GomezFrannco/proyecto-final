const mongoose = require('mongoose');
const config = require('config');
const { log } = require('./log4js.utils.js')

let instance = null;

class MongoDBConnection {
  constructor() {
    this.db = mongoose;
    this.config = config.get("mongodb");
    this.status = false 
  }
  async connectToMongo() {
    try {
      await this.db.connect(this.config.uri)
      this.status = true;
      log.console.debug("💾 connected to MongoAtlas");
      return;
    } catch (error) {
      log.console.error(error.message, "code: " + error.code);
      log.file.error(error.message, "code: " + error.code);
    }
  }
  async disconnectFromMongo() {
    try {
      await this.db.connection.close();
      this.status = false;
      log.console.warn("❗ disconnected from MongoAtlas");
      return;
    } catch (error) {
      log.console.error(error.message);
      log.file.error(error.message);
    }
  }
  static getInstance() {
    if (!instance) {
      instance = new MongoDBConnection();
    }
    return instance;
  }
}

module.exports = MongoDBConnection;
