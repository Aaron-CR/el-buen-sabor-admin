import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DialogComponent } from './components/dialog/dialog.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CustomerComponent } from './components/details-tab/customer/customer.component';
import { PaymentComponent } from './components/details-tab/payment/payment.component';
import { ShippingComponent } from './components/details-tab/shipping/shipping.component';
import { StatusComponent } from './components/details-tab/status/status.component';
import { InvoiceComponent } from './components/invoice-tab/invoice/invoice.component';
import { DetailComponent } from './components/products-tab/detail/detail.component';
import { NotesComponent } from './components/products-tab/notes/notes.component';

@NgModule({
  declarations: [
    DialogComponent,
    NavigationComponent,
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
    MaterialModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
    DialogComponent,
    NavigationComponent,
    CustomerComponent,
    PaymentComponent,
    ShippingComponent,
    StatusComponent,
    InvoiceComponent,
    DetailComponent,
    NotesComponent
  ]
})
export class SharedModule { }
