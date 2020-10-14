// TODO: simple-factory also called static-factory
export abstract class BMW {
  abstract product(): void;
}

export class BMW740 extends BMW {
  product(): void {
    console.log('开始生产宝马740');
  }

}

export class BMW840 extends BMW {
  product(): void {
    console.log('开始生产宝马840');
  }

}

