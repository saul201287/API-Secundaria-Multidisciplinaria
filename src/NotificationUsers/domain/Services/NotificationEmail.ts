export interface INotificationEmail {
    sendNotificationPutPassword(email: string): Promise<boolean>;
    sendNotificationPutUsername(email: string): Promise<boolean>;
  }