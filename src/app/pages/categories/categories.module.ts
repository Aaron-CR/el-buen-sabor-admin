import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesTableComponent } from './categories-table/categories-table.component';
import { CategoriesDialogComponent } from './categories-dialog/categories-dialog.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';


@NgModule({
  declarations: [
    CategoriesTableComponent,
    CategoriesDialogComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule,
    DataTableModule
  ]
})
export class CategoriesModule { }
