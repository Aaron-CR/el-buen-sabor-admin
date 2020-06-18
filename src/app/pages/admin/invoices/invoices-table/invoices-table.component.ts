import { Component, OnInit } from '@angular/core';
import { InvoicesDialogComponent } from '../invoices-dialog/invoices-dialog.component';
import { Factura } from 'src/app/core/models/comprobantes/factura';

@Component({
  selector: 'app-invoices-table',
  templateUrl: './invoices-table.component.html',
  styleUrls: ['./invoices-table.component.scss']
})
export class InvoicesTableComponent implements OnInit {

  public detailDialog = InvoicesDialogComponent;
  public path = 'http://localhost:8080/api/v1/facturas';
  public title = 'Facturas';
  public icon = 'receipt';
  public actions = false;
  public tableColumns = [
    { columnDef: 'id', header: 'N° Factura', cell: (factura: Factura) => `${factura.id}` },
    { columnDef: 'fecha', header: 'Fecha', cell: (factura: Factura) => `${factura.fecha}` },
    { columnDef: 'total', header: 'Monto', cell: (factura: Factura) => `${factura.total}` },
    { columnDef: 'estado', header: 'Estado', cell: (factura: Factura) => `${factura.estado}` },
    { columnDef: 'orden', header: 'N° Orden', cell: (factura: Factura) => `${factura.orden.id}` }
  ];
  public displayedColumns = this.tableColumns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

}
