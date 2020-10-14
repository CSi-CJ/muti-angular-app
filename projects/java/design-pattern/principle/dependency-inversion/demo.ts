export class Email {
  getInfo(): void {
    console.log('使用email接收信息');
  }
}

// export class Access {
//   getInfo(email: Email): void {
//     email.getInfo();
//   }
// }

/**
 * 使用依赖倒转原则进行改造
 * 定义一个公共的接口往上抽取，依赖于抽象而不依赖于细节
 */

export interface Receiver {
    getInfo(): void;
}

export class WeChat implements Receiver {
  getInfo(): void {
    console.log('使用WeChat接收信息');
  }
}

export class Access {
  getInfo(receiver: Receiver): void {
    receiver.getInfo();
  }
}
