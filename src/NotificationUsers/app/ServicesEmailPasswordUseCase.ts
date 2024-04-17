import { INotificationEmail } from "../domain/Services/NotificationEmail";
import { IWebSocket } from "./services/IWebSocket";

export class ServicesNotificationPasswordUseCase {
  constructor(
    readonly notification: INotificationEmail,
    readonly servicesMessages: IWebSocket
  ) {}
  async run(email: string) {
    try {
      const data = await this.notification.sendNotificationPutPassword(email);
      const result = await this.servicesMessages.sendMessages(
        1,
        "se ha modificado la contrseña exitosamente"
      );
      console.log(result);
      return data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
