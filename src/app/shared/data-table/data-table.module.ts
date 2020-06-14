import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { DataTableService } from './data-table.service';
import { SharedModule } from '../shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    DataTableComponent
  ],
  providers: [
    DataTableService
  ]
})
export class DataTableModule { }
