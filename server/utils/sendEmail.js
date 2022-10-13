const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  let transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    secure:false,
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

    const mailOptions = {
      from:process.env.EMAIL_ID,
      to:options.to,
      subject:options.subject,
      text: options.text
    }

    transporter.sendMail(mailOptions, function(err) {
      if (err) {
        console.log(err)
      }
    })
}


module.exports = sendEmail;