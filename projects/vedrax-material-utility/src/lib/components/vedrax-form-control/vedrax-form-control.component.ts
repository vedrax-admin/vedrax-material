import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DescriptorFormControl } from '../../entities';

/**
 * Class that defines a form control component according to the control type
 */
@Component({
  selector: 'vedrax-form-control',
  templateUrl: './vedrax-form-control.component.html'
})
export class VedraxFormControlComponent {

  @Input() form : FormGroup = new FormGroup({});
  @Input() descriptor : DescriptorFormControl = new DescriptorFormControl();

  get formComponent(): FormControl {
    return this.form.get(this.descriptor.controlName) as FormControl;
  }

}
