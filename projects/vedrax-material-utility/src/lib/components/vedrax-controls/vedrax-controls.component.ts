import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { DescriptorForm, ControlsPerGroup } from '../../entities';

@Component({
  selector: 'vedrax-controls',
  templateUrl: './vedrax-controls.component.html',
  styleUrls: ['./vedrax-controls.component.scss']
})
export class VedraxControlsComponent implements OnInit {

  /**
   * The form controls
   */
  @Input() descriptor: DescriptorForm = new DescriptorForm();

  /**
   * Controls per group list
   */
  controlsPerGroups: ControlsPerGroup[] = [];

  /**
   * The form object
   */
  @Input() form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {

    if (this.descriptor.groups) {

      const groups = this.descriptor.groups;

      this.controlsPerGroups = [];

      groups.forEach(group => {
        let controlsPerGroup: ControlsPerGroup = new ControlsPerGroup();
        controlsPerGroup.name = group.name;

        const ids = group.ids || [];

        ids.forEach(id => {
          const ctrl = this.getControl(id);
          if (ctrl) {
            controlsPerGroup.addControl(ctrl);
          }
        });

        this.controlsPerGroups.push(controlsPerGroup);
      });

    }

  }

  private getControl(controlId: string) {
    return this.descriptor.controls.find(control => control.controlName === controlId);
  }

}
