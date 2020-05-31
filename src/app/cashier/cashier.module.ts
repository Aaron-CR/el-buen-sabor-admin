import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { CashierTableComponent } from './cashier-table/cashier-table.component';
import { CashierDialogComponent } from './cashier-dialog/cashier-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { CustomerComponent } from './cashier-dialog/components/details-tab/customer/customer.component';
import { PaymentComponent } from './cashier-dialog/components/details-tab/payment/payment.component';
import { ShippingComponent } from './cashier-dialog/components/details-tab/shipping/shipping.component';
import { StatusComponent } from './cashier-dialog/components/details-tab/status/status.component';
import { InvoiceComponent } from './cashier-dialog/components/invoice-tab/invoice/invoice.component';
import { DetailComponent } from './cashier-dialog/components/products-tab/detail/detail.component';
import { NotesComponent } from './cashier-dialog/components/products-tab/notes/notes.component';


@NgModule({
  declarations: [
    CashierTableComponent,
    CashierDialogComponent,
    CustomerComponent,
    PaymentComponent,
    ShippingComponent,
    StatusComponent,
    InvoiceComponent,
    DetailComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    CashierRoutingModule,
    SharedModule
  ]
})
export class CashierModule { }
