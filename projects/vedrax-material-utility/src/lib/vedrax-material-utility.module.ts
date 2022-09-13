import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//angular library
import { VedraxMaterialModule } from './material/vedrax-material.module';
//components
import { VedraxValidationComponent } from './components/vedrax-validation/vedrax-validation.component';
import { VedraxInputComponent } from './components/vedrax-input/vedrax-input.component';


@NgModule({
  declarations: [
    VedraxValidationComponent,
    VedraxInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    VedraxMaterialModule,
    RouterModule
  ],
  exports: [
    VedraxMaterialModule,
    VedraxValidationComponent,
    VedraxInputComponent
  ]
})
export class VedraxMaterialUtilityModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
