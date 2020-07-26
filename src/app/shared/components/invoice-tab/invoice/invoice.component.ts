import { AuthService } from 'src/app/shared/authentication/auth.service';
import { InvoiceService } from './../../../services/invoice.service';
import { Factura } from 'src/app/core/models/comprobantes/factura';
import { Component, OnInit, Input } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { MatDialogRef } from '@angular/material/dialog';
import { CashierDetailComponent } from 'src/app/pages/cashier/cashier-detail/cashier-detail.component';

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
  public subtotal: number;
  public address: string;
  public invoiceColumns: string[] = ['producto', 'precio', 'cantidad', 'total'];

  constructor(
    private dialogRef: MatDialogRef<CashierDetailComponent>,
    private invoiceService: InvoiceService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.orderId !== undefined) {
      this.getOrderInvoice();
    } else if (this.invoice !== undefined) {
      this.setValues();
    }
  }

  getOrderInvoice() {
    this.invoiceService.getInvoice(this.orderId).subscribe(res => {
      this.invoice = res;
      this.setValues();
    });
  }

  generateInvoice() {
    this.authService.user.subscribe(user => {
      if (user) {
        this.invoiceService.createInvoice(this.orderId, user.uid).subscribe(res => {
          this.invoice = res;
          this.dialogRef.close({ event: 'Reload' });
        });
      }
    });
  }

  setValues() {
    this.subtotal = this.getSubTotal();
    this.address = this.getAddress();
  }

  getSubTotal() {
    return this.invoice.orden.detalles.reduce((acc, value) => acc += value.precioTotal, 0);
  }

  getAddress() {
    if (this.invoice.orden.delivery) {
      const { calle, numero, localidad } = this.invoice.orden.direccionEntrega;
      return `${calle} ${numero}, ${localidad.nombre}, ${localidad.provincia.nombre}`;
    } else {
      if (this.invoice.orden.cliente.direccionesEnvio[0] === undefined) {
        return '';
      } else {
        const { calle, numero, localidad } = this.invoice.orden.cliente.direccionesEnvio[0];
        return `${calle} ${numero}, ${localidad.nombre}, ${localidad.provincia.nombre}`;
      }
    }
  }

  downloadInvoice() {
    const data = document.getElementById('invoice');
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(`invoice-${this.invoice.id}.pdf`);
    });
  }

}
