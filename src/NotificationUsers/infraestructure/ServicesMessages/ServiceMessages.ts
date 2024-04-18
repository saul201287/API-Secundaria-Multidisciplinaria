import io from "socket.io-client";
import { IWebSocket } from "../../app/services/IWebSocket";

export class ServicesMessages implements IWebSocket {
  async sendMessages(codigo: number, message: string): Promise<string> {
    try {
      const url: any = process.env.URL_API_WEBSOCKET;
      const socket = io(url);

      // Manejar evento de conexión
      socket.on("connect", () => {
        console.log("Conexión establecida con el servidor de WebSocket");
        const data = { codigo: codigo, message: message };
        socket.emit("temperatura", data, (response: any) => {
          // Callback de confirmación del servidor
          console.log("Respuesta del servidor:", response);
          socket.disconnect(); // Desconectar el socket después de enviar el mensaje
        });
      });

      // Manejar errores de conexión
      socket.on("connect_error", (error: any) => {
        console.error("Error de conexión con el servidor de WebSocket:", error);
      });

      return "Mensaje enviado";
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      return "Error al enviar mensaje: " + error;
    }
  }
}
