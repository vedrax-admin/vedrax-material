import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DescriptorFormControl, VedraxFile } from '../../entities';

const INVALID_SIZE = 'Taille de fichier invalide';

@Component({
  selector: 'vedrax-upload',
  templateUrl: './vedrax-upload.component.html',
  styleUrls: ['./vedrax-upload.component.scss']
})
export class VedraxUploadComponent implements OnInit {

  @Input() descriptor: DescriptorFormControl = new DescriptorFormControl();
  @Output() uploadedFile: EventEmitter<VedraxFile> = new EventEmitter();

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

      if (!this.isValidSize(size, this.descriptor.controlSizeLimit)) {
        this.uploadedFile.emit({ error: { name, errorMessage: INVALID_SIZE } });
        return;
      }

      if (!this.isValidType(this.descriptor.controlAccept, type)) {
        this.uploadedFile.emit({ error: { name, errorMessage: `Accepted type : ${this.descriptor.controlAccept}` } });
        return;
      }

      this.uploadedFile.emit({ file });
    }
  }

  private isValidType(allowedFileTypes: string[] = [], type: string = ''): boolean {
    return allowedFileTypes.indexOf(type) > -1;
  }

  private isValidSize(size: number = 0, acceptedSize: number = 0): boolean {
    return size <= acceptedSize;
  }

}
