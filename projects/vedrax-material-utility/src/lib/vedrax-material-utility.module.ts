import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//angular library + config
import { VedraxMaterialModule } from './material/vedrax-material.module';
import { Configuration, VEDRAX_CONFIG } from './config/configuration';
import { NgxTranslateModule } from './translate.module';

import { ConfigService } from './services';

//components
import { VedraxValidationComponent,
  VedraxInputComponent,
  VedraxLoaderComponent,
  VedraxSelectComponent,
  VedraxCheckboxComponent,
  VedraxChipsComponent,
  VedraxDatepickerComponent,
  VedraxDateRangePickerComponent,
  VedraxRadioComponent,
  VedraxAutocompleteComponent, 
  VedraxControlComponent, 
  VedraxDynamicComponent, 
  VedraxUploadComponent, 
  VedraxFormControlComponent, 
  VedraxControlsComponent 
} from './components';
import { errorInterceptorProvider, jwtInterceptorProvider, loaderInterceptorProvider } from './interceptors';

@NgModule({
  declarations: [
    VedraxAutocompleteComponent,
    VedraxCheckboxComponent,
    VedraxChipsComponent,
    VedraxControlComponent,
    VedraxControlsComponent,
    VedraxDateRangePickerComponent,
    VedraxDatepickerComponent,
    VedraxDynamicComponent,
    VedraxFormControlComponent,
    VedraxValidationComponent,
    VedraxInputComponent,
    VedraxLoaderComponent,
    VedraxRadioComponent,
    VedraxSelectComponent,
    VedraxUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxTranslateModule,
    ReactiveFormsModule,
    VedraxMaterialModule,
    RouterModule
  ],
  exports: [
    VedraxAutocompleteComponent,
    VedraxMaterialModule,
    VedraxCheckboxComponent,
    VedraxChipsComponent,
    VedraxControlComponent,
    VedraxControlsComponent,
    VedraxDateRangePickerComponent,
    VedraxDatepickerComponent,
    VedraxDynamicComponent,
    VedraxFormControlComponent,
    VedraxValidationComponent,
    VedraxInputComponent,
    VedraxLoaderComponent,
    VedraxRadioComponent,
    VedraxSelectComponent,
    VedraxUploadComponent
  ],
  providers: [
    ConfigService,
    errorInterceptorProvider,
    jwtInterceptorProvider,
    loaderInterceptorProvider
  ]
})
export class VedraxMaterialUtilityModule {
  static forRoot(configuration: Configuration): ModuleWithProviders<VedraxMaterialUtilityModule> {
    return {
      ngModule: VedraxMaterialUtilityModule,
      providers: [{ provide: VEDRAX_CONFIG, useValue: configuration }]
    };
  }
}
