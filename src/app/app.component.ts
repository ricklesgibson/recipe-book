import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  directive: [HeaderComponent]
})
export class AppComponent {
  title = 'rb works!';
}
