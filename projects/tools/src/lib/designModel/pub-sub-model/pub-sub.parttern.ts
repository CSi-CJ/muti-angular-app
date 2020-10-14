/***
 *定义订阅者模型
 **/

// export interface Sub {
//   subTop(): void;
// }
//
// export class ConCreateSub implements Sub{
//
//   constructor(private type: string) {
//   }
//
//   subTop(): void {
//     console.log(this.type);
//   }
//
//
// }


type EventHandler = (...args: any[]) => any;

export class EventEmitter {
  // 定义map存储topic类型和对应的订阅者人数映射关系
  private c = new Map<string, EventHandler[]>();

  // 订阅者可以指定主题
  // tslint:disable-next-line:typedef
  subscribe(topic: string, ...handlers: EventHandler[]) {
    let topics = this.c.get(topic);
    if (!topics) {
      this.c.set(topic, topics = []);
    }
    topics.push(...handlers);
  }

  // 取消订阅(删除订阅者)
  // tslint:disable-next-line:typedef
  unsubscribe(topic: string, handler?: EventHandler){
    if (!handler){
      return this.c.delete(topic);
    }
    const handlers = this.c.get(topic);
    if (!handlers){
      return false;
    }
    const index = handlers.indexOf(handler);
    if (index < 0){
      return false;
    }
    handlers.splice(index, 1);
    if (handlers.length === 0){
      this.c.delete(topic);
    }
    return true;
  }


  // 为指定的主题发送数据
  publish(topic: string, ...args: any[]): any[] | null {
    const handlers = this.c.get(topic);
    if (!handlers){
      return null;
    }
    return handlers.map(handler => {
      try {
        return handler(...args);
      }catch (e) {
        console.error(e);
        return null;
      }
    });
  }
}
