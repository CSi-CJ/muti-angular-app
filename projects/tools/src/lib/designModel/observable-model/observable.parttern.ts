/***
 *观察者模式
 * 1.首先定义一个观察者对象
 * 2.实现观察者行为定义具体的观察者对象
 * 3.定义一个被观察的对象
 **/
export interface Observer {
  // tslint:disable-next-line:ban-types
  notify: Function;
}
export class ConCreateObserver implements Observer{

  constructor(private name: string) {
  }

  notify() {
    console.log(`${this.name} has been notify`);
  }
}

export class Subject {
  private observers: Observer[] = [];

  //定义两个方法，添加观察者和删除观察者

  addObserver(observer: Observer): void{
    console.log('add new observer', observer);
    this.observers.push(observer);
  }

  deleteObserver(observer: Observer): void {
    console.log('delete a observer', observer);
    const n: number = this.observers.indexOf(observer);
    n !== -1 && this.observers.splice(n, 1);
  }

  //遍历观察者数组通知
  public notifyObservers(): void {
    console.log('notify all the observers', this.observers);
    this.observers.forEach(observer => observer.notify());
  }
}
