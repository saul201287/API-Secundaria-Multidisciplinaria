import nodemailer from "nodemailer";
import { INotificationEmail } from "../../domain/Services/NotificationEmail";

export class ServicesEmail implements INotificationEmail {
  transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "jssaul99@gmail.com",
        pass: "gdgh tsiy oiqp xikt"
      },
    });
  }

  async sendNotificationPutPassword(email: string): Promise<boolean> {
    try {
      const info = await this.transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Alerta de seguridad 🔒`,
        html: `
          <b>Se detectó un cambio en la contraseña de tu cuenta, si reconoces esta acción ignora este correo</b><br /> 
          <b>De lo contrario, ingresa al siguiente link para ver la actividad: <a href="">link</a></b> `,
      });
      console.log("Email enviado:", info.messageId);
      return true;
    } catch (error) {
      console.error("Error al enviar el email:", error);
      return false;
    }
  }

  async sendNotificationPutUsername(email: string): Promise<boolean> {
    try {
      const info = await this.transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Alerta de seguridad 🔒`,
        html: `
          <b>Se detectó un cambio en el nombre de usuario de tu cuenta, si reconoces esta acción ignora este correo</b><br /> 
          <b>De lo contrario, ingresa al siguiente link para ver la actividad: </b> <a href="">link</a>`,
      });
      console.log("Email enviado:", info.messageId);
      return true;
    } catch (error) {
      console.error("Error al enviar el email:", error);
      return false;
    }
  }
}
