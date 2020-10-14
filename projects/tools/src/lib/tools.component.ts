import { Component, OnInit } from '@angular/core';
import {CarBuilder} from 'projects/tools/src/lib/designModel/construct-model/construct-model.parttern';
import {BMW740Factory} from 'projects/tools/src/lib/designModel/factory-model/factory-method.parttern';
import {ConcreteFactory} from 'projects/tools/src/lib/designModel/factory-model/abstruct-factory.parttern';
import {AliLogger, CloudLoggerAdapter} from 'projects/tools/src/lib/designModel/adopter-model/adopter.parttern';
import {ConCreateAccept, ConCreateSend, InterCreationService} from 'projects/tools/src/lib/designModel/adopter-model/temp.model';
import {AdapterService} from 'projects/tools/src/lib/designModel/adopter-model/adapter.service';
import {ConCreateObserver, Subject} from 'projects/tools/src/lib/designModel/observable-model/observable.parttern';
import {EventEmitter} from 'projects/tools/src/lib/designModel/pub-sub-model/pub-sub.parttern';
import {Authenticator, WeChatStrategy} from 'projects/tools/src/lib/designModel/stragegy-model/stragegy.pattern';
import {BMWFactory} from 'projects/tools/src/lib/designModel/factory-model/simple-factory.parttern';
import {Auth, Logger, Route} from 'projects/tools/src/lib/designModel/responsibility-model/responsibility.pattern';


@Component({
  selector: 'lib-tools',
  template: `
    <p>
      tools works!
    </p>
  `,
  styles: [
  ]
})
export class ToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const car = new CarBuilder().addChassis('碳钎维').addEngine('v12').addBody('西装暴徒').build();
    console.log(car);
    const bmw740 = BMWFactory.produceBMW('740');
    bmw740.product();

    // 工厂方法模式
    const bmw740Factory = new BMW740Factory();
    bmw740Factory.produceBMW().product();

    // 抽象工厂模式
    const bmw = new ConcreteFactory().produceBMW740();
    bmw.product();

    // 适配器模式
    (async () => {
      const aliLogger = new AliLogger();
      const cloudLoggerAdapter = new CloudLoggerAdapter(aliLogger);
      const adapterService = new AdapterService(cloudLoggerAdapter);
      await adapterService.send('Hello semlinker, To Cloud');
    })();


    (async () => {
      const conCreateSend = new ConCreateSend();
      const conCreateAccept = new ConCreateAccept(conCreateSend);
      const interCreationService = new InterCreationService(conCreateAccept);
      await interCreationService.run('kaishi');
    })();

    // 观察者模式

    const subject = new Subject();
    // 创建观察者
    const observer = new ConCreateObserver('隔壁老王');
    const observer2 = new ConCreateObserver('sp头子');

    subject.addObserver(observer);
    subject.addObserver(observer2);

    subject.notifyObservers();


    // 发布订阅这模式
    const eventEmitter = new EventEmitter();
    eventEmitter.subscribe('ts', (msg) => console.log(`收到订阅的消息：${msg}`) );

    eventEmitter.publish('ts', 'TypeScript发布订阅模式');
    eventEmitter.unsubscribe('ts');
    eventEmitter.publish('ts', 'TypeScript发布订阅模式');

    // 策略模式
    const authenticator = new Authenticator();
    authenticator.strategy(new WeChatStrategy());
    authenticator.authenticate('123456');


    // 职责链模式
    const route = new Route();
    route.addMiddleware(new Auth('zhangsan', '123')).addMiddleware(new Logger());
    route.get('/api/todos', data => {
      console.log(JSON.stringify({data}, null , 2));
    });
    route.get('/api/random', data => {
      console.log(data);
    });

    // 模板方法模式
    // const cvsPath = './data.cvs';
    // const markupPath = './design-pattern.md';
    //
    // new CVSParser().parse(cvsPath);
    // new MarkupParser().parse(markupPath);
  }
}
