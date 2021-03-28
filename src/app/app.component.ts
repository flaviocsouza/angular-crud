import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <app-basic-user-form></app-basic-user-form>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-crud';
}
