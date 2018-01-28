import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'angular2-datatable';

import { SharedModule } from '../../shared/shared.module';

import { TransactionsComponent } from './transactions.component';
import { TransactionsRouter } from './transactions.router';

@NgModule({
  imports: [
    TransactionsRouter,
    CommonModule,
    DataTableModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TransactionsComponent
  ]
})
export class TransactionsModule { }
