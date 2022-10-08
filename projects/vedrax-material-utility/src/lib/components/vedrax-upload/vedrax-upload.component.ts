import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DescriptorFormControl } from '../../entities';

@Component({
  selector: 'vedrax-upload',
  templateUrl: './vedrax-upload.component.html',
  styleUrls: ['./vedrax-upload.component.scss']
})
export class VedraxUploadComponent implements OnInit {

  @Input() form: FormGroup = new FormGroup({});
  @Input() descriptor: DescriptorFormControl = new DescriptorFormControl();

  fileName: string = '';
  displayMessage: string = 'file.unavailable';

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Method for uploading a file
   * @param event 
   * @returns 
   */
  uploadFiles(event: any = {}) {

    const file: File = event.target.files[0];

    if (file) {

      const { type, name, size } = file;

      //check size
      if (!this.isValidSize(size, this.descriptor.controlSizeLimit)) {
        this.displayMessage = 'file.limit.error';
        return;
      }

      //check type
      if (!this.isValidType(this.descriptor.controlAccept, type)) {
        this.displayMessage = 'file.type.error';
        return;
      }

      const control = this.form.get(this.descriptor.controlName);

      if (control) {
        this.fileName = name;
        control.setValue(file);
      }

    }
  }

  private isValidType(allowedFileTypes: string[] = [], type: string = ''): boolean {
    return allowedFileTypes.indexOf(type) > -1;
  }

  private isValidSize(size: number = 0, acceptedSize: number = 0): boolean {
    return size <= acceptedSize;
  }

}
