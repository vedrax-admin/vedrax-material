import { Component, OnInit, Input } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { DescriptorFormControl } from '../../entities/descriptor-form-control';

@Component({
  selector: 'vedrax-chips',
  templateUrl: './vedrax-chips.component.html'
})
export class VedraxChipsComponent implements OnInit {

  @Input() form: FormGroup = new FormGroup({});
  @Input() descriptor: DescriptorFormControl = new DescriptorFormControl();

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
 * Get declared array of controls
 */
  get formArray(): FormArray {
    return this.form.get(this.descriptor.controlName) as FormArray;
  }

  /**
   * Method for adding element
   * @param event 
   */
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.formArray.push(new FormControl(value));
    }

    // Reset the input value
    event.chipInput!.clear();
  }

  /**
   * Method for deleting element
   * @param index 
   */
  remove(index: number): void {
    if (index >= 0) {
      this.formArray.removeAt(index);
    }
  }

}
