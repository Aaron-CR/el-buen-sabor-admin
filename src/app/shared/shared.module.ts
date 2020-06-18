import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
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

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  thousands: '.',
  decimal: ',',
  precision: 2,
  prefix: '$ ',
  suffix: ''
};

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
    CurrencyMaskModule,
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
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
})
export class SharedModule { }
