import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { EmployeesDialogComponent } from './employees-dialog/employees-dialog.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';


@NgModule({
  declarations: [EmployeesTableComponent, EmployeesDialogComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialModule,
    DataTableModule
  ]
})
export class EmployeesModule { }
