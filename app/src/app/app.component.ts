import { Component } from '@angular/core';
import { notify } from './swal-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  isNotifyVisible(): boolean {
    return notify.isNoityVisible();
  }
}
