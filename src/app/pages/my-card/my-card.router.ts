import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCardComponent } from './my-card.component';

const routes: Routes = [
  {
    path: '',
    component: MyCardComponent,
    data: {
      title: 'My Card'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCardRouter {}
