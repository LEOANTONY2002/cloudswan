import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "mail.cloudswan@gmail.com",
    pass: "rxgw znvm hjan ifcx",
  },
});

var mailOptions = {
  from: "",
  to: "mail.cloudswan@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

export async function POST(req) {
  const data = await req.json();
  const { name, email, phone, mode } = data;

  try {
    mailOptions.from = email;
    let mail = await transporter.sendMail(mailOptions);
    if (mail) {
      return {
        success: true,
        msg: mail,
      };
    } else {
      return {
        success: false,
        msg: mail,
      };
    }
    return new Response(JSON.stringify({ success: true, msg: mail }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, msg: error }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
