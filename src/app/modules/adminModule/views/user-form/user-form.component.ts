import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ValidationMessages, GenericValidator, DisplayMessages } from '../../../../Utils/genericValidator'
import { fromEvent, merge, Observable } from 'rxjs';
import { UserModel } from '../../../../models/userModel';

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html'
})
export class UserFormComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read:ElementRef }) formInputElements:ElementRef[];

  userForm:FormGroup;
  user:UserModel;  
  validator:GenericValidator;
  validationMessages:ValidationMessages;
  displayMessages:DisplayMessages = {};

  constructor( private builder:FormBuilder ) {
    this.validationMessages = {
      firstName: {
        required: 'First name is Required',
        minlength: 'First name must contain at least 2 characters ',
        maxlength: 'First name must contain a maximum of 15 characters'
      },
      lastName: {
        required: 'Last name is Required',
        minlength: 'Last name must contain at least 2 characters ',
        maxlength: 'Last name must contain a maximum of 15 characters'
      },
      eMail: {
        required: 'E-mail is Required',
        email: 'E-mail is invalid '
      },
      password: {
        required: 'Password is Required',
        minlength: 'Password must contain at least 6 characters ',
        maxlength: 'Password must contain a maximum of 12 characters'
      },
      ssn: {
        required: 'SSN is required'
      }
    };
    this.validator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.userForm =  this.builder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      lastName: ['',  [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      eMail: ['',  [Validators.required, Validators.email]],
      password: ['',  [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      ssn: ['',  Validators.required]
    });
  }

  ngAfterViewInit(): void {
    //merge is depreceated find out how update this method
    let inputBlurs: Observable<any>[] =
     this.formInputElements.map((input:ElementRef) => fromEvent(input.nativeElement, 'blur'));
    merge(...inputBlurs).subscribe(_ => this.displayMessages = this.validator.validateForm(this.userForm)); 
  }

  submitUserForm(){
    this.user = Object.assign({}, this.userForm.value);
    console.log(this.user);
  }
}
