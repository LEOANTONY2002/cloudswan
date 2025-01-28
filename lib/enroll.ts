import { Resend } from "resend";

const resend = new Resend("re_fiase9nF_AcZ5hBUS4JT9YmRu6wkvDVQK");

export async function sendEnrollEmail(
  name: string,
  email: string,
  phone: string,
  mode: string
) {
  try {
    let mail = await resend.emails.send({
      from: email,
      to: "online.cloudswan@gmail.com",
      subject: "Test Email",
      html: "<p>Email from <strong>NodeJS</strong>!</p>",
    });
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
  } catch (error) {
    return {
      success: false,
      msg: error,
    };
  }
}
