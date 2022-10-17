import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
    selector: 'vedrax-loader',
    templateUrl: './vedrax-loader.component.html',
    styleUrls:['./vedrax-loader.component.scss']
})
export class VedraxLoaderComponent {

    constructor(public loaderService: LoaderService) {}

}