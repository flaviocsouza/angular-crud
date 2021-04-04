import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';


import { MenuComponent } from './components/navigation/menu/menu.component';
import { HomeComponent } from './views/pages/home/home.component';

import { UserFormComponent } from './views/forms/user-form/user-form.component';
import { EventFormComponent } from './views/forms//event-form/event-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserFormComponent,
    HomeComponent,
    EventFormComponent,
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
