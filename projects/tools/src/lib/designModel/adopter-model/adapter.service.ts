import {Logger} from './adopter.pattern';

export class AdapterService {

  constructor(private logger: Logger) {
  }
  public async send(message: string): Promise<void> {
    await this.logger.info(`Notification sended: ${message}`);
  }
}
/**
 *适配器模式是怎样运行的
 * 首先实现原来不兼容的两个接口的功能转换到新创建的软件实体之上并且实现同样的功能
 * 包装之前发送消息的接口适配原来现有的接收器
 * 最后通过服务串联起所有软件实体正常工作
 */
