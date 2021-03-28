import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user';

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
      firstName: [''],
      lastName: [''],
      eMail: [''],
      password: [''],
      ssn: ['']
    })
  }

  submitUserForm(){
    this.user = Object.assign({}, this.userForm.value)
    console.log(this.user)
  }

}
