import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  directive: [HeaderComponent, RecipesComponent]
})
export class AppComponent {
}
