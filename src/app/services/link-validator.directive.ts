import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appLinkValidator]',
  standalone: true,
  providers: [{ provide: NG_VALIDATORS, useExisting: LinkValidatorDirective, multi: true }]
})
export class LinkValidatorDirective implements Validator {
  @Input('appLinkValidator') linkPattern: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const link = control.value;
    const regex = new RegExp(this.linkPattern);
    const valid = regex.test(link);
    return valid ? null : { invalidLink: true };
  }
}
