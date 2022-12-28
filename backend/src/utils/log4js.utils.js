const log4js = require('log4js');

log4js.configure({
  appenders: {
    console: { type: "console" },
    file: { type: "file", filename: "./logs/info.log"}
  },
  categories: {
    default: { appenders: ["console"], level: "debug" },
    fileLogs: { appenders: ["file"], level: "info" },
  },
});

module.exports = {
  log: {
    console: log4js.getLogger(),
    file: log4js.getLogger("fileLogs")
  }
};
