export class ServiceCMessageHandler {
  static handleMessage(msg: string) {
    console.log('I just got a message!');
    console.log('>>>>>>> ' + msg);
  }
}