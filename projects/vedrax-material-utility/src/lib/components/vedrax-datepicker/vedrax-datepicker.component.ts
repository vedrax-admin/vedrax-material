import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { VedraxBaseComponent } from '../vedrax-base.component';

/**
 * Class that defines a datepicker component
 */
@Component({
  selector: 'vedrax-datepicker',
  templateUrl: './vedrax-datepicker.component.html'
})
export class VedraxDatepickerComponent extends VedraxBaseComponent {

  constructor(configService: ConfigService) {
    super(configService);
  }
}
