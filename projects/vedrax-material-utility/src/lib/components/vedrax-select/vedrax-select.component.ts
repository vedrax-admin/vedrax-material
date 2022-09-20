import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DescriptorOption } from '../../entities/descriptor-option';
import { LovService } from '../../services/lov.service';
import { ConfigService } from '../../services/config.service';
import { VedraxBaseComponent } from '../vedrax-base.component';

/**
 * Class that defines a select component
 */
@Component({
  selector: 'vedrax-select',
  templateUrl: './vedrax-select.component.html'
})
export class VedraxSelectComponent extends VedraxBaseComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  /**
 * Emit number of options when all of them are available
 */
  @Output() isReady: EventEmitter<number> = new EventEmitter();

  constructor(configService: ConfigService,
    private lovService: LovService) {
    super(configService);
  }

  options: DescriptorOption[] = [];

  override ngOnInit(): void {
    super.ngOnInit();
    this.subscription.add(this.lovService.getOptionsFromControlDescriptor(this.descriptor)
      .subscribe(options => {
        this.options = options;
        //emit nb of options
        this.isReady.emit(options.length);
        //copy in control options in case we need that in other part
        if (!this.descriptor.controlOptions) {
          this.descriptor.controlOptions = options;
        }
      }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
