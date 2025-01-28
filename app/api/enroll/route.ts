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
  subject: "Course Enquiry",
  text: "",
};

export async function POST(req) {
  const data = await req.json();
  const { name, email, mobile, mode, course } = data;

  try {
    mailOptions.from = email;
    mailOptions.text = course
      ? `Name: ${name} \nEmail: ${email} \nMobile: ${mobile} \nClass Mode: ${mode} \nCourse: ${course}`
      : `Name: ${name} \nEmail: ${email} \nMobile: ${mobile} \nClass Mode: ${mode}`;
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
