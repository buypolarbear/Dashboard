import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WalletRouter } from './wallet.router';
import { WalletComponent } from './wallet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WalletRouter
  ],
  declarations: [
    WalletComponent
  ]
})
export class WalletModule { }
