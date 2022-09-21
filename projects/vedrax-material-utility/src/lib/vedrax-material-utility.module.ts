import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//angular library + config
import { VedraxMaterialModule } from './material/vedrax-material.module';
import { Configuration, VEDRAX_CONFIG } from './config/configuration';
import { NgxTranslateModule } from './translate.module';
//components
import { VedraxValidationComponent } from './components/vedrax-validation/vedrax-validation.component';
import { VedraxInputComponent } from './components/vedrax-input/vedrax-input.component';
import { VedraxSelectComponent } from './components/vedrax-select/vedrax-select.component';
import { ConfigService } from './services/config.service';
import { VedraxCheckboxComponent } from './components/vedrax-checkbox/vedrax-checkbox.component';

@NgModule({
  declarations: [
    VedraxCheckboxComponent,
    VedraxValidationComponent,
    VedraxInputComponent,
    VedraxSelectComponent
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
    VedraxMaterialModule,
    VedraxCheckboxComponent,
    VedraxValidationComponent,
    VedraxInputComponent,
    VedraxSelectComponent
  ],
  providers: [
    ConfigService
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
