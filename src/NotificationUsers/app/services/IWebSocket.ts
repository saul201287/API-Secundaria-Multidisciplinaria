export interface IWebSocket {
    sendMessages(codigo: number, message:string): Promise<string>
}