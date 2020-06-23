import { Component, OnInit, Input } from '@angular/core';
import { Orden } from 'src/app/core/models/comprobantes/orden';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  @Input()
  public data: Orden;
  invoiceColumns: string[] = ['producto', 'precio', 'cantidad', 'total'];

  get address() {
    return `${this.data.direccionEntrega.calle} ${this.data.direccionEntrega.numero}, ${this.data.direccionEntrega.localidad.nombre}, ${this.data.direccionEntrega.localidad.provincia.nombre}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  /** Gets the total cost of all rows. */
  getTotal() {
    return this.data.detalles.map(t => t.precioTotal).reduce((acc, value) => acc + value, 0);
  }

}
