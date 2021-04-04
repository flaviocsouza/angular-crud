import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { fromEvent, merge, Observable } from 'rxjs';
import { EventModel } from '../../../models/eventModel';
import { DisplayMessages, GenericValidator, ValidationMessages } from 'src/app/Utils/genericValidator';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html'
})
export class EventFormComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements:ElementRef[]
  
  eventForm:FormGroup; 
  event: EventModel
  validator:GenericValidator;
  validationMessages:ValidationMessages;
  displayMessages:DisplayMessages ={};

  constructor(private builder:FormBuilder) {
    this.validationMessages = {
      name:{
        required: 'Event name is required',
        minlength: 'First name must contain at least 2 characters ',
        maxlength: 'First name must contain a maximum of 15 characters'
      },
      startDate:{
        required: 'Select a date to Start event',
      },
      endDate:{
        required: 'Select a date to End event',
      },
      admin:{
        required: 'Choose a Administrator to event',
      },
    };

    this.validator = new GenericValidator(this.validationMessages);

  }
  
  ngOnInit(): void {
    this.eventForm = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      admin: ['', [Validators.required]],
      description: ['']
    })
  }

  ngAfterViewInit(): void {
    let inputBlurs:Observable<any>[] = 
      this.formInputElements.map((input:ElementRef) => fromEvent(input.nativeElement, 'blur'));
    merge(...inputBlurs).subscribe( _ => this.displayMessages = this.validator.validateForm(this.eventForm));
  }

  submitEventForm() {
    this.event = Object.assign({}, this.eventForm.value);
    console.log(this.event)
  }
}
