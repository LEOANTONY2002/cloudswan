import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "mail.cloudswan@gmail.com",
    pass: "jlmt hacc shnw rhyf",
  },
});

var mailOptions = {
  to: "cloudswansolution@gmail.com",
  from: "",
  subject: "Course Enquiry",
  text: "",
};

const locations = [
  {
    name: "Lakshmi Mills, Coimbatore",
    mail: "mail.cloudswan@gmail.com",
  },
  {
    name: "Lakshmi Mills, Coimbatore",
    mail: "cloudswansolution@gmail.com",
  },
];

export async function POST(req) {
  const data = await req.json();
  const { name, email, mobile, mode, course, location } = data;

  try {
    mailOptions.from = email;
    mailOptions.text = `Name: ${name} \nEmail: ${email} \nMobile: ${mobile} \nCourse: ${course} \nClass Mode: ${mode} \nLocation: ${location}`;
    let mail = await transporter.sendMail(mailOptions);
    if (mail) {
      return new Response(JSON.stringify({ success: true, msg: mail }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ success: false, msg: mail }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, msg: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
