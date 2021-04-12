import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MenuComponent } from './components/menu/menu.component'
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

@NgModule({
  declarations:[
    MenuComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports:[
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    HomeComponent,
    NotFoundComponent
  ]
})

export class NavigationModule{ }