import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturedRoutingModule } from './manufactured-routing.module';
import { ManufacturedTableComponent } from './manufactured-table/manufactured-table.component';
import { ManufacturedDialogComponent } from './manufactured-dialog/manufactured-dialog.component';


@NgModule({
  declarations: [ManufacturedTableComponent, ManufacturedDialogComponent],
  imports: [
    CommonModule,
    ManufacturedRoutingModule
  ]
})
export class ManufacturedModule { }
