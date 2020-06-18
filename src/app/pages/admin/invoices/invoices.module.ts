import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesTableComponent } from './invoices-table/invoices-table.component';
import { InvoicesDialogComponent } from './invoices-dialog/invoices-dialog.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';


@NgModule({
  declarations: [InvoicesTableComponent, InvoicesDialogComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    MaterialModule,
    DataTableModule
  ]
})
export class InvoicesModule { }
