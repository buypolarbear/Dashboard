import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'angular2-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LaddaModule } from 'angular2-ladda';

import { SharedModule } from '../../shared/shared.module';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ForgotPasswordRouter } from './forgot-password.router';

@NgModule({
  imports: [
    ForgotPasswordRouter,
    CommonModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LaddaModule
  ],
  declarations: [
    ForgotPasswordComponent
  ]
})
export class ForgotPasswordModule { }
