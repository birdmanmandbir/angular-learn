import { Component } from '@angular/core';
import { Logger } from 'src/services/logger.service';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css'],
})
export class HelloworldComponent {
  message = 'hello-message';
  isRed = false;
  toggleColor = () => {
    this.isRed = !this.isRed;
  };

  count = 0;
  constructor(private logger: Logger) {}
  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}
