import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LaddaModule } from 'angular2-ladda';

import { SharedModule } from '../../shared/shared.module';

import { ContactRouter } from './contact.router';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    ContactRouter,
    SharedModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
