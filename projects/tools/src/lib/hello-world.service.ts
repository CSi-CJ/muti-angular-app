import { Injectable } from '@angular/core';

/**
 * 通过providedIn: 'root'选项声明为可注入。这意味着该服务是单例。可以在任何组件和任何服务中使用
 * 如果没有声明，那么在使用该服务的时候就要在使用该服务的组件中进行声明注入一个实例@Component({providers: [HelloWorldService]})
 * 或者在模块级别进行统一声明@NgModule({provider: [HelloWorldService]})
 */

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor() { }

  get message(): string {
    return 'hello-world';
  }
}
