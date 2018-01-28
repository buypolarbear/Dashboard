import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'angular2-datatable';

import { SharedModule } from '../../shared/shared.module';

import { MyCardComponent } from './my-card.component';
import { MyCardRouter } from './my-card.router';

@NgModule({
  imports: [
    MyCardRouter,
    CommonModule,
    DataTableModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MyCardComponent
  ]
})
export class MyCardModule { }
