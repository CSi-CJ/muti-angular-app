export class Singleton {
  // 定义私有的静态属性来保存对象实例
  private static singleton: Singleton;

  private constructor() {

  }

  // 定义为一获取实例对象的方法
  public static getInstance(): Singleton {
    if (!Singleton.singleton) {
      Singleton.singleton = new Singleton();
    }
    return Singleton.singleton;
  }
}

/**
 * 需要频繁实例化然后销毁的对象
 * 创建对象时耗时过多或资源过多但又经常用到的对象
 * 系统只需要一个实例对象，如系统要求提供一个唯一的序列号生成器或资源管理器，或者需要考虑资源消耗太大而只允许创建一个对象。
 */
