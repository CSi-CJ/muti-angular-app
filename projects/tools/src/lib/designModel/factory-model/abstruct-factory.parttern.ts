import {BMW, BMW740, BMW840} from 'projects/tools/src/lib/designModel/factory-model/factory.pojo';

export abstract class BMWFactory  {
  abstract produceBMW740(): BMW;
  abstract produceBMW840(): BMW;
}

export class ConcreteFactory extends BMWFactory {
  produceBMW740(): BMW {
    return new BMW740();
  }

  produceBMW840(): BMW {
    return new BMW840();
  }
}

/**
 * 一个系统不应当依赖于产品类实例如何被创建、组合和表达的细节，这对于所有类型的工厂模式都是重要的。
 * 系统中有多于一个的产品族而每次只使用一类产品族
 * 系统提供一个产品的类库所有的产品同样的接口出现。从而使客户端不依赖于具体的实现
 */
