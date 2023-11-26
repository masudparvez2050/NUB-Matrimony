const nodemailer = require("nodemailer");

const SMTP_MAIL = "masudparvez2050@gmail.com";
const SMTP_PASS = "gtsb vyki tlib riha";

const sendMail = async (email, mailsubject, content) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: SMTP_MAIL,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: SMTP_MAIL,
      to: email,
      subject: mailsubject,
      html: content,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail sent successfullly:- ", info.response);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendMail;
