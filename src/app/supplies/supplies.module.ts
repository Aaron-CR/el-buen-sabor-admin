import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliesRoutingModule } from './supplies-routing.module';
import { SuppliesTableComponent } from './supplies-table/supplies-table.component';
import { SuppliesDialogComponent } from './supplies-dialog/supplies-dialog.component';


@NgModule({
  declarations: [SuppliesTableComponent, SuppliesDialogComponent],
  imports: [
    CommonModule,
    SuppliesRoutingModule
  ]
})
export class SuppliesModule { }
