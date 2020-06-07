import { Component, OnInit } from '@angular/core';

export interface Payment {
  tansaccion: string;
  metodoDePago: string;
  monto: string;
  fecha: string;
}

const PAYMENT_DATA: Payment[] = [
  { tansaccion: '2a894b9e', metodoDePago: 'Tarjeta de credito', monto: '$ 73,31', fecha: 'Apr 2, 2018 12:34:32' }
];

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentColumns: string[] = ['tansaccion', 'metodoDePago', 'monto', 'fecha'];
  paymentDataSource = PAYMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
