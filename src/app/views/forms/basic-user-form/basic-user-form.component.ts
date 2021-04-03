import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user';

@Component({
  selector: 'app-basic-user-form',
  templateUrl: 'basic-user-form.component.html'
})
export class BasicUserFormComponent implements OnInit {

  userForm:FormGroup;
  user:User;  

  constructor( private builder:FormBuilder ) { }
  
  ngOnInit(): void {
    this.userForm =  this.builder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      lastName: ['',  [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      eMail: ['',  [Validators.required, Validators.email]],
      password: ['',  [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      ssn: ['',  Validators.required]
    })
  }

  submitUserForm(){
    this.user = Object.assign({}, this.userForm.value)
    console.log(this.user)
  }
}
