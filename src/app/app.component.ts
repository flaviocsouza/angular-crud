import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-menu></app-menu>
    <div style="text-align:center" class="content">
      <div class="container">
        <div class="row">
        <div class="col-6">
          <app-basic-user-form></app-basic-user-form>
        </div>
        <div class="col-6">
          <app-basic-product-form></app-basic-product-form>
        </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-crud';
}
