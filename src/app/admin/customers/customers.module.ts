import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { CustomersDialogComponent } from './customers-dialog/customers-dialog.component';


@NgModule({
  declarations: [CustomersTableComponent, CustomersDialogComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
