import io from "socket.io-client";
import { IWebSocket } from "../../app/services/IWebSocket";

export class ServicesMessages implements IWebSocket {
  async sendMessages(codigo: number, message: string): Promise<string> {
    //console.log(message);
    
    try {
      const url: any = process.env.URL_API_WEBSOCKET;
      const socket = io(url);
      console.log(socket);
      
      const data = { codigo: codigo, message: message };
      socket.on("connect", () => {
        console.log("Conexión establecida con el servidor de WebSocket");
        socket.emit("temperatura", data);
      });
      socket.on("connect_error", (error: any) => {
        console.error("Error de conexión con el servidor de WebSocket:", error);
      });
      return "Mensaje enviado";
    } catch (error) {
      
      console.error(error);
      return "error:" + error;
    }
  }
}
