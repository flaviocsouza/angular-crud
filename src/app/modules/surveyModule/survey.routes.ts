import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SurveyDashboardComponent } from "./views/survey-dashboard/survey-dashboard.component";
import { SurveyFormComponent } from "./views/survey-form/survey-form.component";

const surveyRouterConfig:Routes = [
  { path: "", component: SurveyDashboardComponent },
  { path: "surveyForm", component: SurveyFormComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(surveyRouterConfig)
  ],
  exports: [
    RouterModule
  ]
})
export class SurveyRoutingModule {}