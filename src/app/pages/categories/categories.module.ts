import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesTableComponent } from './categories-table/categories-table.component';
import { CategoriesDialogComponent } from './categories-dialog/categories-dialog.component';


@NgModule({
  declarations: [
    CategoriesTableComponent,
    CategoriesDialogComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
