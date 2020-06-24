import { Component, OnInit, Input } from '@angular/core';
import { Orden } from 'src/app/core/models/comprobantes/orden';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  @Input()
  public data: Orden;
  public zoom = 18;

  get address() {
    return `${this.data.direccionEntrega.calle} ${this.data.direccionEntrega.numero}, ${this.data.direccionEntrega.localidad.nombre}, ${this.data.direccionEntrega.localidad.provincia.nombre}`;
  }

  get repartidor() {
    return `${this.data.repartidor.nombre} ${this.data.repartidor.apellido}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
