import { createTransport } from "nodemailer";

const defaultMail = async (receiver: Array<string>): Promise<string> => {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = createTransport({
      host: process.env.SMTPSERVER,
      port: 465, //587
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAILUSER, // generated ethereal user
        pass: process.env.EMAILPASS, // generated ethereal password
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "addTech <info@addtech.site>", // sender address
      to: receiver.length === 1 ? receiver[0] : receiver.join(", "), // list of receivers
      envelope: {
        from: "info@addtech.site", // sender address
        to: receiver.length === 1 ? receiver[0] : receiver.join(", "), // list of receivers
      },
      subject: "Thanks for Subscribing", // Subject line
      text: "You have subscribed to our newsletter, you can unsubscribe at: https://www.example.com", // plain text body
      html: "You have subscribed to our newsletter, you can unsubscribe at: <a href='https://www.example.com' target='blank'>https://www.example.com</a>", // html body
    });

    return info.messageId;
  } catch (err) {
    throw err;
  }
};

export { defaultMail };
