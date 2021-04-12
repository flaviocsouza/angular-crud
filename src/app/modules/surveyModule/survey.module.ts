import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { SurveyRoutingModule } from "./survey.routes";

import { SurveyDashboardComponent } from "./views/survey-dashboard/survey-dashboard.component";
import { SurveyFormComponent } from "./views/survey-form/survey-form.component";

@NgModule({
  declarations: [
    SurveyDashboardComponent,
    SurveyFormComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    SurveyRoutingModule
  ],
  exports:[
    SurveyDashboardComponent,
    SurveyFormComponent
  ]
})
export class SurveyModule {}