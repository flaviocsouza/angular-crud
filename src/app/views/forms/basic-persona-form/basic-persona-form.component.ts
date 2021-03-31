import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-basic-persona-form',
  templateUrl: './basic-persona-form.component.html',
  styles: [
  ]
})
export class BasicPersonaFormComponent implements OnInit {

  constructor(private builder:FormBuilder) { }

  personaForm:FormGroup;
  persona:Persona;

  ngOnInit(): void {
    this.personaForm = this.builder.group({
      name: [''],
      japaneseName: [''],
      arcana: [''],
      elements: [''],
      debutGame: ['']
    });
  }

  submitPersonaForm(){
    this.persona = Object.assign({}, this.personaForm.value);
    console.log(this.persona);
  }

}
