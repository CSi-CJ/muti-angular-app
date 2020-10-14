export interface Logger {
  info(message: string): Promise<void>;
}

export interface CloudLogger {
  sendToServer(message: string, type: string): Promise<void>;
}

export class AliLogger implements CloudLogger{
  public async sendToServer(message: string, type: string): Promise<void> {
    console.info(message);
    console.info('This Message was saved with AliLogger');
  }
}

export class CloudLoggerAdapter implements Logger{

  constructor(private cloudLogger: CloudLogger){

  }
  public async info(message: string): Promise<void> {
    await this.cloudLogger.sendToServer(message, 'info');
  }

}
