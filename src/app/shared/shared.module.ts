import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BaseComponent } from './components/dialogs/base/base.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CustomerComponent } from './components/details-tab/customer/customer.component';
import { PaymentComponent } from './components/details-tab/payment/payment.component';
import { ShippingComponent } from './components/details-tab/shipping/shipping.component';
import { StatusComponent } from './components/details-tab/status/status.component';
import { InvoiceComponent } from './components/invoice-tab/invoice/invoice.component';
import { DetailComponent } from './components/products-tab/detail/detail.component';
import { NotesComponent } from './components/products-tab/notes/notes.component';
import { EditPhoneComponent } from './components/dialogs/edit-phone/edit-phone.component';
import { EditPasswordComponent } from './components/dialogs/edit-password/edit-password.component';
import { DialogService } from './components/dialogs/dialog.service';

/* FIREBASE */
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from './../../environments/environment';

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
    BaseComponent,
    NavigationComponent,
    CustomerComponent,
    PaymentComponent,
    ShippingComponent,
    StatusComponent,
    InvoiceComponent,
    DetailComponent,
    NotesComponent,
    EditPhoneComponent,
    EditPasswordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    ReactiveFormsModule,
    CurrencyMaskModule,
    MaterialModule,
    BaseComponent,
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
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    DialogService,
    AngularFireAuth
  ],
})
export class SharedModule { }
