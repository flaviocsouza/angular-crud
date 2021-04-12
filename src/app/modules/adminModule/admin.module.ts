import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { AdminRoutingModule } from "./admin.routes"

import { UserFormComponent } from "./views/user-form/user-form.component";
import { UserListComponent } from './views/user-list/user-list.component';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations:[
    UserFormComponent,
    UserListComponent,
    AdminDashboardComponent
  ],
  imports:[
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    UserFormComponent
  ]
})
export class AdminModule {}