import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { CashierTableComponent } from './cashier-table/cashier-table.component';
import { CashierDialogComponent } from './cashier-dialog/cashier-dialog.component';


@NgModule({
  declarations: [
    CashierTableComponent,
    CashierDialogComponent
  ],
  imports: [
    CommonModule,
    CashierRoutingModule
  ]
})
export class CashierModule { }
