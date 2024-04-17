import io from "socket.io-client";

export class ServicesMessagesNotification {
  async run(codigo: number, message: string): Promise<string> {   
    try {
      const url: any = process.env.URL_API_WEBSOCKET;
      const socket = io(url);
      const data = { codigo: codigo, message: message };
      socket.on("connect", () => {
        socket.emit("notification-alert", data);
      });
      return "Mensaje enviado";
    } catch (error) {
      console.error(error);
      return "error:" + error;
    }
  }
}
