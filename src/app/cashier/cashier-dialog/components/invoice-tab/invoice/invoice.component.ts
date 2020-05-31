import { Component, OnInit } from '@angular/core';

export interface Invoice {
  producto: string;
  precio: number;
  cantidad: number;
  total: number;
}

const INVOICE_DATA: Invoice[] = [
  { producto: 'Item 1', precio: 10.24, cantidad: 1, total: 10.24 },
  { producto: 'Item 2', precio: 24.62, cantidad: 1, total: 24.62 },
  { producto: 'Item 3', precio: 49.29, cantidad: 1, total: 49.29 }
];

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoiceColumns: string[] = ['producto', 'precio', 'cantidad', 'total'];
  invoiceDataSource = INVOICE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  /** Gets the total cost of all rows. */
  getTotal() {
    return this.invoiceDataSource.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

}
