import {BMW, BMW740, BMW840} from 'projects/tools/src/lib/designModel/factory-model/factory.pojo';

/**
 * 工厂类负责创建的对象比较少：由于创建的对象比较少，不会造成工厂方法中业务逻辑过于复杂。
 * 客户端只需知道传入工厂类静态方法的参数，而不需要关心创建对象的细节。
 */
export class BMWFactory {
  public static produceBMW(model: '740' | '840'): BMW {
    if (model === '740') {
      return new BMW740();
    }else if (model === '840') {
      return new BMW840();
    }
  }
}
