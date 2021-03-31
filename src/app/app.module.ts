import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BasicUserFormComponent } from './views/forms/basic-user-form/basic-user-form.component';
import { BasicGameFormComponent } from './views/forms/basic-game-form/basic-game-form.component';
import { MenuComponent } from './components/navigation/menu/menu.component';

import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { BasicPersonaFormComponent } from './views/forms/basic-persona-form/basic-persona-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicUserFormComponent,
    BasicGameFormComponent,
    MenuComponent,
    BasicPersonaFormComponent
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
