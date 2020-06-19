import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { DataTableService } from './data-table.service';
import { SharedModule } from '../shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './components/public/public.component';



@NgModule({
  declarations: [
    DataTableComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DataTableComponent
  ],
  providers: [
    DataTableService
  ]
})
export class DataTableModule { }
