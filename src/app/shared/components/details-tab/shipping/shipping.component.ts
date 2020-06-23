import { Component, OnInit, Input } from '@angular/core';
import { Orden } from 'src/app/core/models/comprobantes/orden';

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

  @Input()
  public data: Orden;
  public zoom = 17;
  carrierColumns: string[] = ['nombre', 'email', 'teléfono'];
  carrierDataSource = CARRIER_DATA;
  public address = '';

  constructor() { }

  ngOnInit(): void {
    this.address = `${this.data.direccionEntrega.calle} ${this.data.direccionEntrega.numero}, ${this.data.direccionEntrega.localidad.nombre}, ${this.data.direccionEntrega.localidad.provincia.nombre}`;
  }

}
