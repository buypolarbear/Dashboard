import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LaddaModule } from 'angular2-ladda';

import { SharedModule } from '../../shared/shared.module';

import { AccountSettingsRouter } from './account-settings.router';
import { AccountSettingsComponent } from './account-settings.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AccountSettingsRouter,
    LaddaModule
  ],
  declarations: [
    AccountSettingsComponent
  ]
})
export class AccountSettingsModule { }
