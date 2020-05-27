import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashierTableComponent } from './cashier-table/cashier-table.component';
import { CashierDialogComponent } from './cashier-dialog/cashier-dialog.component';


const routes: Routes = [
  { path: '', component: CashierDialogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierRoutingModule { }
