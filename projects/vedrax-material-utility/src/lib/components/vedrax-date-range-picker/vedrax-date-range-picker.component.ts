import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DescriptorFormControl } from '../../entities';
import { ConfigService } from '../../services';

/**
 * Class that defines a date range picker component
 */
@Component({
  selector: 'vedrax-date-range-picker',
  templateUrl: './vedrax-date-range-picker.component.html'
})
export class VedraxDateRangePickerComponent implements OnInit {

  @Input() range: FormGroup = new FormGroup({});
  @Input() descriptor: DescriptorFormControl = new DescriptorFormControl();

  /**
  * The form field appearance used by default
  */
  formControlAppearance: MatFormFieldAppearance = 'fill';

  hasValidDescriptors:boolean = false;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.formControlAppearance = this.configService.getFormControlAppearance();
    if(this.descriptor.controlChildren && this.descriptor.controlChildren.length === 2){
      this.hasValidDescriptors = true;
    }
  }

}