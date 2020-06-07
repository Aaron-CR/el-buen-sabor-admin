import { Component, OnInit } from '@angular/core';

export interface Customer {
  nombre: string;
  email: string;
  teléfono: string;
}

const CUSTOMER_DATA: Customer[] = [
  { nombre: 'Nombre Apellido', email: 'cliente@email.com', teléfono: '+54 (0) 261 423 4234' }
];

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerColumns: string[] = ['nombre', 'email', 'teléfono'];
  customerDataSource = CUSTOMER_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
