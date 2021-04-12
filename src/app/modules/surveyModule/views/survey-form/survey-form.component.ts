import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ValidationMessages, GenericValidator, DisplayMessages } from 'src/app/Utils/genericValidator';
import { fromEvent, merge, Observable } from 'rxjs';
import { SurveyModel } from 'src/app/models/surveyModel';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styles: [
  ]
})
export class SurveyFormComponent implements OnInit, AfterViewInit{

  @ViewChildren(FormControlName, {read:ElementRef}) formInputElements:ElementRef[];

  surveyForm:FormGroup;
  survey:SurveyModel;
  validator:GenericValidator;
  validationMessages:ValidationMessages;
  displayMessages:DisplayMessages = {}

  constructor(private formBuilder:FormBuilder) {
    this.validationMessages = {
      name: {
        required: "Survey name is Required"
      }
    };
    this.validator = new GenericValidator(this.validationMessages)
  }
  
  
  ngOnInit(): void {
    this.surveyForm = this.formBuilder.group({
      name:['', Validators.required]
    });
  }
  
  ngAfterViewInit(): void {
    let inputBlurs:Observable<any>[] = 
      this.formInputElements.map((input:ElementRef) => fromEvent(input.nativeElement, 'blur'));
    merge(...inputBlurs).subscribe((_) => this.displayMessages = this.validator.validateForm(this.surveyForm));
  }

  submitSurveyForm() {
    this.survey = Object.assign({}, this.surveyForm.value);
    console.log(this.survey)
  }

}
