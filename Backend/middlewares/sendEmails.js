const nodeMailer = require('nodemailer');

exports.sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '4699a8d731c173',
      pass: '8a75fab9b5f37b',
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
