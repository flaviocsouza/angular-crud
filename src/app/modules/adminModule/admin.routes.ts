import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserFormComponent } from "./views/user-form/user-form.component";
import { UserListComponent } from "./views/user-list/user-list.component";
import { AdminDashboardComponent } from "./views/admin-dashboard/admin-dashboard.component";

const adminRouterConfig:Routes =[
  { path: '', component: AdminDashboardComponent },
  { path: 'userForm', component: UserFormComponent },
  { path: 'userList', component: UserListComponent }
]
@NgModule({
  imports:[
    RouterModule.forChild(adminRouterConfig)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule {}