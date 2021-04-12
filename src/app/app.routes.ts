import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./modules/navigationModule/views/home/home.component";
import { NotFoundComponent } from "./modules/navigationModule/views/not-found/not-found.component";

const rootRouterConfig:Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    {
      path: 'admin', 
      loadChildren: () => import('./modules/adminModule/admin.module')
      .then(module => module.AdminModule)
    },
    {
      path: 'survey', 
      loadChildren: () => import('./modules/surveyModule/survey.module')
      .then(module => module.SurveyModule)
    },
    
    {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot( rootRouterConfig )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }