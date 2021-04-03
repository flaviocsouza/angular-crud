import { Routes } from "@angular/router";
import { BasicUserFormComponent } from "./views/forms/basic-user-form/basic-user-form.component";
import { HomeComponent } from "./views/pages/home/home.component";


export const rootRouterConfig:Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'userForm', component: BasicUserFormComponent }
]