import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LaddaModule } from 'angular2-ladda';

import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginRouter } from './login.router';

@NgModule({
  imports: [
    LoginRouter,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LaddaModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
