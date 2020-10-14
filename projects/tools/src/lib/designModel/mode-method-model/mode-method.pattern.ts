/*
import fs from 'fs';


export abstract class DataParser {
  data: string = null;
  out: any = null;

  // 定义模板方法
  // tslint:disable-next-line:typedef
  parse(pathUrl: string) {
    this.readFile(pathUrl);
    this.doParsing();
    this.printData();
  }

  readFile(pathUrl: string): void {
    this.data = fs.readFileSync(pathUrl, 'utf-8');
  }


  abstract doParsing(): void;

  // tslint:disable-next-line:typedef
  printData() {
    console.log(this.out);
  }
}

export class CVSParser extends DataParser {
  doParsing(): void {
    this.out = this.data.split(',');
  }
}

export class MarkupParser extends DataParser {
  doParsing(): void {
    this.out = this.data.match(/<\w+>.*<\/\w+>/gim);
  }
}
*/
