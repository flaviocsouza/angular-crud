import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BasicUserFormComponent } from './views/forms/basic-user-form/basic-user-form.component';
import { BasicProductFormComponent } from './views/forms/basic-product-form/basic-product-form.component';
import { MenuComponent } from './components/navigation/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicUserFormComponent,
    BasicProductFormComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
