import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliesRoutingModule } from './supplies-routing.module';
import { SuppliesTableComponent } from './supplies-table/supplies-table.component';
import { SuppliesDialogComponent } from './supplies-dialog/supplies-dialog.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';


@NgModule({
  declarations: [SuppliesTableComponent, SuppliesDialogComponent],
  imports: [
    CommonModule,
    SuppliesRoutingModule,
    MaterialModule,
    DataTableModule
  ]
})
export class SuppliesModule { }
