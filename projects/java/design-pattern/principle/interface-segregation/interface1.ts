interface Interface1 {
  operation1(): void;
}

interface Interface2 {
  operation2(): void;
  operation3(): void;
}

interface Interface3 {
  operation4(): void;
  operation5(): void;
}

// 按需实现不同的接口

export class B implements Interface1, Interface2{
  operation1(): void {
    console.log('B类的operation1()');
  }

  operation2(): void {
    console.log('B类的operation2()');
  }

  operation3(): void {
    console.log('B类的operation3()');
  }
}

export class A{
  operation1(i: Interface1): void {
    i.operation1();
  }

  operation2(i: Interface2): void {
    i.operation2();
  }

  operation3(i: Interface2): void {
    i.operation3();
  }
}


export class D implements Interface1, Interface3{
  operation1(): void {
    console.log('D类的operation1()');
  }

  operation4(): void {
    console.log('D类的operation4()');
  }

  operation5(): void {
    console.log('D类的operation5()');
  }
}


export class C{
  operation1(i: Interface1): void {
    i.operation1();
  }

  operation2(i: Interface3): void {
    i.operation4();
  }

  operation3(i: Interface3): void {
    i.operation5();
  }
}



