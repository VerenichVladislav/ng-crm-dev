import { Directive } from '@angular/core';
import {AbstractControl, FormGroup, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appIdentityPassword]'
})
export class IdentityPasswordDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return identityPasswordValidator(control)
  }
}
export const identityPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pass = control.get('hashPass');
  const repeat = control.get('repeatPass');

  return pass.value !== repeat.value ? { 'nonIdenticalPassword': true } : null;
};
