import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenRoutingModule } from './kitchen-routing.module';
import { KitchenTableComponent } from './kitchen-table/kitchen-table.component';
import { KitchenDialogComponent } from './kitchen-dialog/kitchen-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';


@NgModule({
  declarations: [KitchenTableComponent, KitchenDialogComponent],
  imports: [
    CommonModule,
    KitchenRoutingModule,
    SharedModule,
    DataTableModule
  ]
})
export class KitchenModule { }
