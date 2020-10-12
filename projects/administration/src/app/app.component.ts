import { Component } from '@angular/core';
import {HelloWorldService} from '../../../tools/src/lib/hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'administration';

  constructor(helloWorldService: HelloWorldService) {
    this.title = helloWorldService.message;
  }
}
