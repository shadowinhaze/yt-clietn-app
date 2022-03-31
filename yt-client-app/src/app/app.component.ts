import { Component } from '@angular/core';

const TITLE = 'yt-client-app';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
class AppComponent {
  title = TITLE;
}

export { TITLE, AppComponent };
