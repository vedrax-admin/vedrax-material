import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DescriptorValidation } from '../../entities';

/**
 * Class that defines a component validation
 */
@Component({
  selector: 'vedrax-validation',
  templateUrl: './vedrax-validation.component.html',
  styleUrls: ['./vedrax-validation.component.scss']
})
export class VedraxValidationComponent implements OnInit {

  @Input() control?: FormControl;
  @Input() validations?: DescriptorValidation[] = [];

  ngOnInit(): void {
  }

  getError(errorName: string) {
    if (!this.control) {
      return undefined;
    }

    const errors = this.control.errors;
    if (errors) {
      return errors[errorName];
    }
    return undefined;

  }

}
