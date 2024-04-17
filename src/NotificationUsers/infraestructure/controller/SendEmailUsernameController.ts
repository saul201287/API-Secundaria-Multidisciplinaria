import { Request, Response } from "express";
import { ServicesNotificationUsernameUseCase } from "../../app/ServicesEmailUseCase";

export class SendNotificationPutUsernamedController {
  constructor(readonly notification: ServicesNotificationUsernameUseCase) {}
  async run(req: Request, res: Response) {
    const data = req.body;
    console.log(data.email);
    
    try {
      const result = await this.notification.run(data.email);
      if (result) res.status(200).json({message:"Correo enviado"});
      else res.status(400).send("no se pudo enviar el correo");
    } catch (error) {
      res.status(500).json({
        message: "error en el servidor",
        error: error,
      });
    }
  }
}
