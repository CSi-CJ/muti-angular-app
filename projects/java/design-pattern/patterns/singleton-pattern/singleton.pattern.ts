/***
 * 单例模式又分为懒汉式和饿汉式
 * 懒汉式： 只有在调用的时候采取创建实例对象
 * 饿汉式： 在初始化加载类的时候就生成静态的实例对象
 *
 * (在java环境中)如果是在多线程的情况之下，则需要加上原子操作和锁synchronized关键字
 */

export class Singleton {
  private static instance: Singleton = null;

  private constructor() {
  }

  public getInstance(): Singleton {
    if (Singleton.instance === null){
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}


/***
 * 扩展单例模式
 */
export class Multi {
  private static list: Array<Multition> = null;

  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      Multi.list.push(new Multition());
    }
  }

  public getRandomInstance(n: number){
  }
}


export class Multition {
  constructor(){

  }
}
