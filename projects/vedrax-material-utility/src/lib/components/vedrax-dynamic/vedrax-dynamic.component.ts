import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';

import { DescriptorFormControl } from '../../entities/descriptor-form-control';
import { FormService } from '../../services/form.service';

/**
 * Class that defines a dynamic component
 */
@Component({
  selector: 'vedrax-dynamic',
  templateUrl: './vedrax-dynamic.component.html',
  styleUrls: ['./vedrax-dynamic.component.scss']
})
export class VedraxDynamicComponent implements OnInit {

  @Input() form: FormGroup = new FormGroup({});
  @Input() descriptor: DescriptorFormControl = new DescriptorFormControl();

  titles: Map<number, string> = new Map();

  constructor(private formService: FormService) { }

  ngOnInit(): void {

  }

  /**
   * Get declared array of controls
   */
  get formArray(): FormArray {
    return this.form.get(this.descriptor.controlName) as FormArray;
  }

  /**
   * Get child control
   * @param control 
   * @param descriptor 
   * @returns 
   */
  getChildControl(control: AbstractControl, descriptor: DescriptorFormControl): FormControl {
    return this.formService.getComponent(control, descriptor.controlName);
  }

  /**
   * Remove a control by index from the array
   * 
   * @param index the index of the control
   */
  remove(index: number): void {
    this.formArray.removeAt(index);
  }

  /**
   * Add a control to the array
   */
  add(): void {
    const formGroup: FormGroup = this.formService.createFormGroup(this.descriptor.controlChildren);
    this.formArray.push(formGroup);
  }


}
