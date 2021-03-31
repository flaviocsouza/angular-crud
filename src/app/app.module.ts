import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BasicUserFormComponent } from './views/forms/basic-user-form/basic-user-form.component';
import { BasicProductFormComponent } from './views/forms/basic-product-form/basic-product-form.component';
import { MenuComponent } from './components/navigation/menu/menu.component';

import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BasicUserFormComponent,
    BasicProductFormComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
