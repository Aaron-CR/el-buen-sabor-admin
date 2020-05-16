import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { InvoicesTableComponent } from './invoices-table/invoices-table.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    AdminPanelComponent,
    CustomersTableComponent,
    InvoicesTableComponent,
    EmployeesTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
