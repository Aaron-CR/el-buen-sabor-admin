import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { CustomersDialogComponent } from './customers-dialog/customers-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';


@NgModule({
  declarations: [CustomersTableComponent, CustomersDialogComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    MaterialModule,
    DataTableModule
  ]
})
export class CustomersModule { }
