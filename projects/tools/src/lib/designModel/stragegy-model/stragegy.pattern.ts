/***
 * 场景： 多模式登录
 * 1.定义统一的策略接口
 * 2.实现多个不同策略的方案并且最后达到相同的效果
 *
 */
export interface Strategy {
  authenticate(args: any): any;
}

// TODO： 相当于认证系统需要注册认证策略 然后一个方法检验当前策略是否通过
export class Authenticator {
  strategy: any;
  constructor() {
    this.strategy = null;
  }

  set Strategy(strategy: any) {
    this.strategy = strategy;
  }

  authenticate(...args: any) {
    if (!this.strategy) {
      console.log('尚未设置认证策略');
      return;
    }
    return this.strategy.authenticate(...args);
  }
}

export class WeChatStrategy implements Strategy {
  authenticate(weChatToken: string) {
    if (weChatToken !== '123') {
      console.log('无效的微信用户');
      return;
    }
    console.log('微信认证成功');
  }
}

export class LocalStrategy implements Strategy {
  authenticate(username: string, password: string) {
    if (username !== 'abao' && password !== '123') {
      console.log('账号或密码错误');
      return;
    }
    console.log('账号和密码认证成功');
  }
}
