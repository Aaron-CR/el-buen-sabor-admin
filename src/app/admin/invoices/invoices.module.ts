import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesTableComponent } from './invoices-table/invoices-table.component';
import { InvoicesDialogComponent } from './invoices-dialog/invoices-dialog.component';


@NgModule({
  declarations: [InvoicesTableComponent, InvoicesDialogComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
