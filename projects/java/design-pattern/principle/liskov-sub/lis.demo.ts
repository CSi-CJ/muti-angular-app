/***
 * 里氏替换原则：
 * 定义： 凡是所有能引用基类的地方都必须能透明的使用其子类的对象
 */
// export class LisA {
//   intergerSub(intA: number, intB: number): number{
//     return intA - intB;
//   }
// }
// export class LisB extends LisA {
//   // 重写A类中的方法
//   intergerSub(intA: number, intB: number): number{
//     return intA + intB;
//   }
//   intergerMulti(intA: number, intB: number): number{
//     return intA * intB;
//   }
// }


/***
 * 里氏替换原则：
 * 上面的写法会造成方法调用结果出现混淆，因为在子类的继承中重写了父类的方法，所以导致可能会造成在方法调用的时候分辨不清
 * 通过向上提取更简单的基类 让父子类共同继承该基类
 *
 * 如果还想让原来的子类调用原来父类中的方法，那么可以使用聚合组合的方式实现，注入
 */

export class Common {

}

export class LisA extends Common{
  intergerSub(intA: number, intB: number): number{
    return intA - intB;
  }
}
export class LisB extends Common {
  private lisa: LisA = new LisA();
  // 重写A类中的方法
  intergerAdd(intA: number, intB: number): number{
    return intA + intB;
  }
  intergerMulti(intA: number, intB: number): number{
    return intA * intB;
  }
  intergerSub(intA: number, intB: number){
    this.lisa.intergerSub(intA, intB);
  }
}
