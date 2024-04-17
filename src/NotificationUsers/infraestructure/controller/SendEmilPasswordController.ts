import { Request, Response } from "express";
import { ServicesNotificationPasswordUseCase } from "../../app/ServicesEmailPasswordUseCase";

export class SendNotificationPutPasswordController {
  constructor(readonly notification: ServicesNotificationPasswordUseCase) {}
  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const result = await this.notification.run(data.email);
      if (result) res.status(200).json({message: "Correo enviado"});
      else res.status(400).send("no se pudo enviar el correo");
    } catch (error) {
      res.status(500).json({
        message: "error en el servidor",
        error: error,
      });
    }
  }
}
