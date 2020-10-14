import {BMW, BMW740, BMW840} from 'projects/tools/src/lib/designModel/factory-model/factory.pojo';

abstract class BMWFactory{
  abstract produceBMW(): BMW;
}

export class BMW740Factory implements BMWFactory{
  produceBMW(): BMW {
    return new BMW740();
  }
}
export class BMW840Factory extends BMWFactory {
  produceBMW(): BMW {
    return new BMW840();
  }
}
/**
 * 一个类不知道它所需要的对象的类：在工厂方法模式中，客户端不需要知道具体产品类的类名，只需要知道所对应的工厂即可，具体的产品对象由具体工厂类创建；客户端需要知道创建具体产品的工厂类。
 * 一个类通过其子类来指定创建哪个对象：在工厂方法模式中，对于抽象工厂类只需要提供一个创建产品的接口，
 * 而由其子类来确定具体要创建的对象，利用面向对象的多态性和里氏代换原则，在程序运行时，子类对象将覆盖父类对象，从而使得系统更容易扩展。
 */

