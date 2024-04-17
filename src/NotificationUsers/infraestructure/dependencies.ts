import { ServicesNotificationPasswordUseCase } from "../app/ServicesEmailPasswordUseCase";
import { ServicesNotificationUsernameUseCase } from "../app/ServicesEmailUseCase";
import { SendNotificationPutPasswordController } from "./controller/SendEmilPasswordController";
import { SendNotificationPutUsernamedController } from "./controller/SendEmailUsernameController";
import { ServicesEmail } from "./ServicesEmail/ServicesNodeEmail";
import { ServicesMessages } from "./ServicesMessages/ServiceMessages";

const servicesEmail = new ServicesEmail();
const servicesMessages = new ServicesMessages();
const servicesNotificationPasswordUseCase =
  new ServicesNotificationPasswordUseCase(servicesEmail, servicesMessages);
const servicesNotificationUsernameUseCase =
  new ServicesNotificationUsernameUseCase(servicesEmail, servicesMessages);

export const sendEmilPasswordController =
  new SendNotificationPutPasswordController(
    servicesNotificationPasswordUseCase
  );
export const SendEmailUsernameController =
  new SendNotificationPutUsernamedController(
    servicesNotificationUsernameUseCase
  );
