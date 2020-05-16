import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenRoutingModule } from './kitchen-routing.module';
import { KitchenTableComponent } from './kitchen-table/kitchen-table.component';
import { KitchenDialogComponent } from './kitchen-dialog/kitchen-dialog.component';


@NgModule({
  declarations: [KitchenTableComponent, KitchenDialogComponent],
  imports: [
    CommonModule,
    KitchenRoutingModule
  ]
})
export class KitchenModule { }
