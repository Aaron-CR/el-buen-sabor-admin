import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturedRoutingModule } from './manufactured-routing.module';
import { ManufacturedTableComponent } from './manufactured-table/manufactured-table.component';
import { ManufacturedDialogComponent } from './manufactured-dialog/manufactured-dialog.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';


@NgModule({
  declarations: [ManufacturedTableComponent, ManufacturedDialogComponent],
  imports: [
    CommonModule,
    ManufacturedRoutingModule,
    MaterialModule,
    DataTableModule
  ]
})
export class ManufacturedModule { }
