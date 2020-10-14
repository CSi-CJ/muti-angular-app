export interface IHandler {
  addMiddleware(h: IHandler): IHandler;

  get(url: string, callback: (data: any) => void): void;
}


export abstract class AbstractHandler implements IHandler {
  next!: IHandler;

  addMiddleware(h: IHandler): IHandler {
    this.next = h;
    return this.next;
  }

  get(url: string, callback: (data: any) => void): void {
    if (this.next) {
      return this.next.get(url, callback);
    }
  }
}

export class Auth extends AbstractHandler {
  isAuthenticated: boolean;

  constructor(username: string, password: string) {
    super();
    this.isAuthenticated = false;

    if (username === 'zhangsan' && password === '123') {
      this.isAuthenticated = true;
    }
  }

  get(url: string, callback: (data: any) => void): void {
    if (this.isAuthenticated) {
      return super.get(url, callback);
    } else {
      throw new Error('Not authorized');
    }
  }
}

export class Logger extends AbstractHandler {
  get(url: string, callback: (data: any) => void): void {
    console.log('/GET Request to: ', url);
    return super.get(url, callback);
  }
}

export class Route extends AbstractHandler {
  URLMaps: { [key: string]: any };

  constructor() {
    super();
    this.URLMaps = {
      '/api/todos': [{title: 'learn ts'}, {title: 'learn react'}],
      '/api/random': Math.random(),
    };
  }

  // tslint:disable-next-line:typedef
  get(url: string, callback: (data: any) => void) {
    super.get(url, callback);

    if (this.URLMaps.hasOwnProperty(url)) {
      callback(this.URLMaps[url]);
    }
  }
}

/***
 * 可处理一个请求的对象集合应被动态指定。
 * 想在不明确指定接收者的情况下，向多个对象中的一个提交一个请求。
 * 有多个对象可以处理一个请求，哪个对象处理该请求运行时自动确定，客户端只需要把请求提交到链上即可。
 */
