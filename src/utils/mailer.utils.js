const nodemailer = require('nodemailer');
const config = require('config').get("mailer");
const { log } = require('./log4js.utils');

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: config.port,
  auth: {
    user: config.account,
    pass: config.password
  }
});

async function sendEmail(payload) {
  transporter.sendMail(payload, (err, info)=>{
    if(err) {
      log.console.error(err, "Error sending email")
      log.file.error(err, "Error sending email")
      return;
    }
    log.console.debug(nodemailer.getTestMessageUrl(info));
  })
}

module.exports = sendEmail;