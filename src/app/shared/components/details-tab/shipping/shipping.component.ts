import { Component, OnInit } from '@angular/core';

export interface Carrier {
  nombre: string;
  email: string;
  teléfono: string;
}

const CARRIER_DATA: Carrier[] = [
  { nombre: 'Nombre Apellido', email: 'cliente@email.com', teléfono: '+54 (0) 261 423 4234' }
];

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  carrierColumns: string[] = ['nombre', 'email', 'teléfono'];
  carrierDataSource = CARRIER_DATA;
  address = 'San Martín 454, Mendoza, Mendoza San Martín 454, Mendoza, Mendoza';
  shipping = true;

  constructor() { }

  ngOnInit(): void {
  }

}
