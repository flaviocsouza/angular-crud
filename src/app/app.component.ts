import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-menu></app-menu>
    <div class="content">
      <div class="container">
        <div class="row">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'angular-crud';
}
