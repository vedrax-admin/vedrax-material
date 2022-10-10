import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DescriptorFormControl } from '../../entities';

/**
 * Class that defines a generic component according to the control type
 */
@Component({
  selector: 'vedrax-control',
  templateUrl: './vedrax-control.component.html'
})
export class VedraxControlComponent {

  @Input() form : FormGroup = new FormGroup({});
  @Input() descriptor : DescriptorFormControl = new DescriptorFormControl();

  get formComponent(): FormControl {
    return this.form.get(this.descriptor.controlName) as FormControl;
  }

  /**
  * Emit number of options when all of them are available
  */
  @Output() isReady: EventEmitter<boolean> = new EventEmitter();

  checkIfOptionsAvailable(optionsNb: number) {
    if(optionsNb > 0){
      this.isReady.emit(true);
    }
  }

}
