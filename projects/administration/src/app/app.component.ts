import { Component } from '@angular/core';
import {HelloWorldService} from '../../../tools/src/lib/hello-world.service';
import {A, B, C, D} from 'projects/java/design-pattern/principle/interface-segregation/interface1';
import {Access, Email, WeChat} from 'projects/java/design-pattern/principle/dependency-inversion/demo';
import {ChangHong, LG, OAC, OACInterface, OACSetter} from 'projects/java/design-pattern/principle/dependency-inversion/three-pattern';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  power = 5;
  factor = 1;
  toggle = true;
  title = 'administration';
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based

  constructor(helloWorldService: HelloWorldService) {
    this.title = helloWorldService.message;
  }

  getFormat() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
    const a = new A();
    a.operation1(new B());
    const c = new C();
    c.operation1(new D());

    // dependency-inversion
    const access = new Access();
    access.getInfo(new Email());
    access.getInfo(new WeChat());

    // 通过构造器的方式进行依赖传递
    const oac = new OAC(new ChangHong());
    oac.openAndClose();
    const oacSetter = new OACSetter();
    oacSetter.setOACSetter(new LG());
    oacSetter.openAndClose();
    // 接口传递
    const oacInterface = new OACInterface();
    oacInterface.openAndClose(new ChangHong());

  }
}
