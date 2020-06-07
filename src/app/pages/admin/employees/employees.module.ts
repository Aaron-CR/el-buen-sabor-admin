import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { EmployeesDialogComponent } from './employees-dialog/employees-dialog.component';


@NgModule({
  declarations: [EmployeesTableComponent, EmployeesDialogComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
