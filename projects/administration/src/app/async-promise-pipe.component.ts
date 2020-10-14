import {Component} from '@angular/core';

@Component({
  selector: 'async-promise-pipe',
  template: `
    <div>
      <p>promise | async</p>
      <button (click)="onClick()">{{arrived ? 'Reset' : 'Resolve'}}</button>
      <span>wait for it.....{{greeting | async}}</span>
    </div>
  `
})
export class AsyncPromisePipeComponent {
  greeting: Promise<string>| null = null;
  arrived = false;

  private resolve: Function| null = null;
  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  onClick() {
    if (this.arrived) {
      this.reset();
    }else {
      this.resolve!('hi, there!');
      this.arrived = true;
    }
  }
}
