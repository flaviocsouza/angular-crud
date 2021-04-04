import { Routes } from "@angular/router";
import { HomeComponent } from "./views/pages/home/home.component";
import { UserFormComponent } from "./views/forms/user-form/user-form.component";
import { EventFormComponent } from "./views/forms/event-form/event-form.component";


export const rootRouterConfig:Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'userForm', component: UserFormComponent },
    { path: 'eventForm', component: EventFormComponent }
]