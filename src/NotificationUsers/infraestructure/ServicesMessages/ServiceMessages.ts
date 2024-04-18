import io from "socket.io-client";
import { IWebSocket } from "../../app/services/IWebSocket";

export class ServicesMessages implements IWebSocket {
  async sendMessages(codigo: number, message: string): Promise<string> {
    //console.log(message);
    
    try {
      const url: any = process.env.URL_API_WEBSOCKET;
      const socket = io(url);
      const data = { codigo: codigo, message: message };
      socket.on("connect", () => {
        socket.emit("temperatura", data);
      });
      return "Mensaje enviado";
    } catch (error) {
      
      console.error(error);
      return "error:" + error;
    }
  }
}