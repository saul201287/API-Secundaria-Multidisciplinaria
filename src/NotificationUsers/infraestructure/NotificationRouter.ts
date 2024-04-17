import express from "express";
import { SendEmailUsernameController } from "./dependencies";
import { sendEmilPasswordController } from "./dependencies";
import { Request, Response } from "express";

export const notification = express.Router();

notification.post("/putUsername", SendEmailUsernameController.run.bind(SendEmailUsernameController))

notification.post("/putPassword", sendEmilPasswordController.run.bind(sendEmilPasswordController))

notification.post("/",(req:Request, res:Response) =>{
    try {
        console.log(req.body);
        res.status(200).send("")
    } catch (error) {
        res.status(500).send(error)
    }
    
})

notification.post("/alerta-movimiento",(req:Request, res:Response) =>{
    try {
        console.log(req.body);
        res.status(200).send("")
    } catch (error) {
        res.status(500).send(error)
    }
    
})
notification.post("/alerta-desbloqueo",(req:Request, res:Response) =>{
    try {
        console.log(req.body);
        res.status(200).send("")
    } catch (error) {
        res.status(500).send(error)
    }
    
})