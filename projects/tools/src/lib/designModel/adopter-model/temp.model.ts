/**
 * 定义两个不兼容的接口
 * 定义适配器兼容这连个接口
 * 定义完成联通服务
 *
 */
export interface Send {
  //这个过程是个延时过程等待消息回应
  sendMsg(message: string, type: string): Promise<void>;
}

export interface Accept {
  acceptMsg(message: string): Promise<void>;
}

//创建适配器的以访按照原先同样的功能发送信息
export class ConCreateSend implements Send{

  public async sendMsg(message: string, type: string): Promise<void> {
    console.log(message);
    console.info('This Message was saved with AliLogger');
  }
}

//创建适配器的另一头用来接收原来的信息并处理与相同的功能转换
export class ConCreateAccept implements Accept {

  constructor(private conCreateSend: ConCreateSend) {

  }

  public async acceptMsg(message: string): Promise<void> {
    await this.conCreateSend.sendMsg(message, 'info');
  }

}

export class InterCreationService {

  constructor(private accept: Accept) {
  }

  public async run(message: string): Promise<void> {
    await this.accept.acceptMsg(message);
  }
}

