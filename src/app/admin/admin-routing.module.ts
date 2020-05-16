import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';
import { InvoicesTableComponent } from './invoices-table/invoices-table.component';


const routes: Routes = [
  { path: '', component: AdminPanelComponent },
  { path: 'customers', component: CustomersTableComponent },
  { path: 'employees', component: EmployeesTableComponent },
  { path: 'invoices', component: InvoicesTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
