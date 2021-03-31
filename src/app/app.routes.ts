import { Routes } from "@angular/router";
import { BasicPersonaFormComponent } from "./views/forms/basic-persona-form/basic-persona-form.component";
import { BasicGameFormComponent } from "./views/forms/basic-game-form/basic-game-form.component";
import { BasicUserFormComponent } from "./views/forms/basic-user-form/basic-user-form.component";

export const rootRouterConfig:Routes = [
    { path: '', redirectTo: '/userForm', pathMatch: 'full'},
    { path: 'gameForm', component: BasicGameFormComponent },
    { path: 'userForm', component: BasicUserFormComponent },
    { path: 'personaForm', component: BasicPersonaFormComponent }
]