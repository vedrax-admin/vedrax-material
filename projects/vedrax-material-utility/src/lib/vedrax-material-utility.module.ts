import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//angular library
import { VedraxMaterialModule } from './material/vedrax-material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VedraxMaterialModule,
    RouterModule
  ],
  exports: [
    VedraxMaterialModule
  ]
})
export class VedraxMaterialUtilityModule { }
