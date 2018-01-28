import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRouter } from './dashboard.router';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouter,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
