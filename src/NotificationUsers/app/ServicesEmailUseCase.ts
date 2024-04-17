import { INotificationEmail } from "../domain/Services/NotificationEmail";
import { IWebSocket } from "./services/IWebSocket";

export class ServicesNotificationUsernameUseCase{
    constructor(readonly notification: INotificationEmail, readonly servicesMessages: IWebSocket){}
    async run(email:string){
        try {
            const data = await this.notification.sendNotificationPutUsername(email);
            const result = await this.servicesMessages.sendMessages(
              2,
              "se ha modificado el nombre de usuario exitosamente"
            );
            console.log(result);
            return data;
          } catch (error) {
            console.error(error);
            return false;
          }
    }
}