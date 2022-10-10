import { Component } from '@angular/core';
import { ConfigService } from '../../services';
import { VedraxBaseComponent } from '../vedrax-base.component';

/**
 * Class that defines an input component
 */
@Component({
  selector: 'vedrax-input',
  templateUrl: './vedrax-input.component.html'
})
export class VedraxInputComponent extends VedraxBaseComponent {

  constructor(configService: ConfigService) {
    super(configService);
  }

}
