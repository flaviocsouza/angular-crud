import { Routes } from "@angular/router";
import { BasicProductFormComponent } from "./views/forms/basic-product-form/basic-product-form.component";
import { BasicUserFormComponent } from "./views/forms/basic-user-form/basic-user-form.component";

export const rootRouterConfig:Routes = [
    { path: '', redirectTo: '/userForm', pathMatch: 'full'},
    { path: 'productForm', component: BasicProductFormComponent },
    { path: 'userForm', component: BasicUserFormComponent }
]