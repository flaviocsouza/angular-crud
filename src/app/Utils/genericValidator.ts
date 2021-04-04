
import { FormGroup } from "@angular/forms"

export class GenericValidator {
  constructor (private validationMessages: ValidationMessages) { }

  validateForm(form: FormGroup): { [key: string]: string } {
    let messages = {};
    for (let fieldName in form.controls) {

      if (!form.controls.hasOwnProperty(fieldName)) continue;

      let field = form.controls[fieldName];
      if(field instanceof FormGroup) Object.assign(messages, this.validateForm(field))

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

export interface ValidationMessages { [key:string]: {[key:string]:string} }
export interface DisplayMessages {[key:string]:string}