import { Component } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { VedraxBaseComponent } from '../vedrax-base.component';

@Component({
  selector: 'vedrax-radio',
  templateUrl: './vedrax-radio.component.html'
})
export class VedraxRadioComponent extends VedraxBaseComponent{

  constructor(configService: ConfigService) {
    super(configService);
  }
}
