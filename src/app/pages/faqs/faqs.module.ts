import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccordionModule } from 'ng2-bootstrap/accordion';

import { FaqsRouter } from './faqs.router';
import { FaqsComponent } from './faqs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FaqsRouter,
    AccordionModule.forRoot()
  ],
  declarations: [
    FaqsComponent
  ]
})
export class FaqsModule { }
