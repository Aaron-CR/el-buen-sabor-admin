import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuTableComponent } from './menu-table/menu-table.component';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';


@NgModule({
  declarations: [MenuTableComponent, MenuDialogComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
