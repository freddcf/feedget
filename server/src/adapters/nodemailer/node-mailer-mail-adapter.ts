import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2fe386ce951ef4",
    pass: "0ae7a8eab7d40c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <@oi@feedget.com>",
      to: "Fred Fonseca <fred@gmail.com>",
      subject,
      html: body,
    })
  }
}