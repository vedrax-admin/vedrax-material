import { Component } from '@angular/core';
import { ConfigService } from '../../services';
import { VedraxBaseComponent } from '../vedrax-base.component';

/**
 * Class that defines a checkbox component
 */
@Component({
  selector: 'vedrax-checkbox',
  templateUrl: './vedrax-checkbox.component.html'
})
export class VedraxCheckboxComponent extends VedraxBaseComponent{

  constructor(configService: ConfigService) {
    super(configService);
  }
}
