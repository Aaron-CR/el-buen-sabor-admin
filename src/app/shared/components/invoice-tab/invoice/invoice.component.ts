import { AuthService } from 'src/app/shared/authentication/auth.service';
import { InvoiceService } from './../../../services/invoice.service';
import { Factura } from 'src/app/core/models/comprobantes/factura';
import { Component, OnInit, Input } from '@angular/core';
import { Orden } from 'src/app/core/models/comprobantes/orden';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  @Input()
  public invoice: Factura;
  @Input()
  public orderId: number;

  public invoiceColumns: string[] = ['producto', 'precio', 'cantidad', 'total'];
  public total: number;

  get address() {
    if (this.invoice !== undefined) {
      const { calle, numero, localidad } = this.invoice.orden.cliente.direccionesEnvio[0];
      return `${calle} ${numero}, ${localidad.nombre}, ${localidad.provincia.nombre}`;
    } else {
      return '';
    }
  }

  constructor(
    private invoiceService: InvoiceService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.orderId !== undefined) {
      this.getOrderInvoice();
    }
    if (this.invoice !== undefined) {
      this.total = this.getTotal();
    }
  }

  /** Gets the total cost of all rows. */
  getTotal() {
    return this.invoice.orden.detalles.map(t => t.precioTotal).reduce((acc, value) => acc + value, 0);
  }

  generateInvoice() {
    this.authService.user.subscribe(user => {
      if (user) {
        this.invoiceService.createInvoice(this.orderId, user.uid).subscribe(res => {
          this.invoice = res;
        });
      }
    });
  }

  getOrderInvoice() {
    this.invoiceService.getInvoice(this.orderId)
      .subscribe(res => this.invoice = res);
  }

}
