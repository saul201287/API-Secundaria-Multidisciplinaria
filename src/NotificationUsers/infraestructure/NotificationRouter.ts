import express from "express";
import {
  SendEmailUsernameController,
  sendEmilPasswordController,
} from "./dependencies";
import { ServicesMessages } from "./ServicesMessages/ServiceMessages";
import { ServicesMessagesNotification } from "./ServicesMessages/SendMessageTemperatura";
import { SendMessagesViolationSeguriti } from "./ServicesMessages/SendMessagesViolationSeguriti";
import { Request, Response } from "express";

export const notification = express.Router();

notification.post(
  "/putUsername",
  SendEmailUsernameController.run.bind(SendEmailUsernameController)
);

notification.post(
  "/putPassword",
  sendEmilPasswordController.run.bind(sendEmilPasswordController)
);

notification.post("/temperatura",async (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    
    const servicesMessages = new ServicesMessages();
    await servicesMessages.sendMessages(1, req.body);
    res.status(200).send("");
  } catch (error) {
    res.status(500).send(error);
  }
});

notification.post("/alerta-movimiento", (req: Request, res: Response) => {
    console.log("se movio");
    
  try {
    const servicesMessagesNotification = new ServicesMessagesNotification();
    servicesMessagesNotification.run(
      2,
      "Alerta de posible violación seguro de tu bicicleta"
    );
    console.log(req.body);
    res.status(200).send("");
  } catch (error) {
    res.status(500).send(error);
  }
});

notification.post("/alerta", (req: Request, res: Response) => {
  try {
    console.log("robo");
    
    const sendMessagesViolationSeguriti = new SendMessagesViolationSeguriti();
    sendMessagesViolationSeguriti.run(
      3,
      "Alerta de violación al seguro de tu bicicleta atender de inmediato"
    );
    console.log(req.body);
    res.status(200).send("");
  } catch (error) {
    res.status(500).send(error);
  }
});

notification.post("/alerta-desbloqueo", (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    res.status(200).send("");
  } catch (error) {
    res.status(500).send(error);
  }
});
