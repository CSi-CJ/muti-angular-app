export interface TV {
  play(): void;
}

export interface IOAC {
  openAndClose(tv: TV): void;
}
// 通过接口注入的方式进行依赖传递
export class OACInterface implements IOAC{
  openAndClose(tv: TV): void {
    tv.play();
  }
}

// 通过构造器的方式进行依赖传递
export class OAC implements IOAC{
  tv: TV;
  constructor(tv: TV) {
    this.tv = tv;
  }

  openAndClose(): void {
    this.tv.play();
  }
}
// 通过setter的方式进行依赖传递
export class OACSetter implements IOAC{
  tv: TV;

  setOACSetter(tv: TV) {
    this.tv = tv;
  }

  openAndClose(): void {
    this.tv.play();
  }
}
/***
 * 假如说一个开关功能，但是这个功能需要放入电视机才能实现，电视机有play功能
 */

export class ChangHong implements TV{
  play(): void {
    console.log('长虹电视开始正常播放');
  }
}

export class LG implements TV{
  play(): void {
    console.log('LG电视开始正常播放');
  }
}
