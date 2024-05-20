import { createTransport, getTestMessageUrl } from "nodemailer";

interface SendEmailProps {
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async (data: SendEmailProps) => {
  let transporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  let info = await transporter.sendMail({
    from: "<no-reply@itsybizz@gmail.com>",
    to: data.to,
    subject: data.subject,
    html: data.html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", getTestMessageUrl(info));
};

export default sendEmail;
