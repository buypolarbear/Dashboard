import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ExplorerComponent } from './explorer.component';
import { ExplorerRouter } from './explorer.router';

@NgModule({
  imports: [
    ExplorerRouter,
    CommonModule,
    FormsModule
  ],
  declarations: [
    ExplorerComponent
  ]
})
export class ExplorerModule { }
