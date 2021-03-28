import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BasicUserFormComponent } from './forms/basic-user-form/basic-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicUserFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
