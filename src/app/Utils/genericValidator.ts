
import { FormGroup } from "@angular/forms"

export class GenericValidator {
  
  //Insert Message List On Constructor of Object
  constructor (private validationMessages: ValidationMessages) { }

  validateForm(form: FormGroup): { [key: string]: string } {
    let messages = {};
    for (let fieldName in form.controls) {

      //Check if a Field Exists in Form 
      if (!form.controls.hasOwnProperty(fieldName)) continue;
      let field = form.controls[fieldName];

      //if the Field is a Inner Form get the Error Messages of Inner Form
      if( field instanceof FormGroup) Object.assign(messages, this.validateForm(field))

      //Check if the field have any validation Message
      else if(this.validationMessages[fieldName]){
        messages[fieldName] = ''
        if((field.dirty || field.touched) && field.errors)
        Object.keys(field.errors).map( messageName => {
          messages[fieldName] += this.validationMessages[fieldName][messageName] ? this.validationMessages[fieldName][messageName] : '' 
        })
      }
    }

    return messages
  } 
}

export interface ValidationMessages{ [key:string]: {[key:string]:string} }