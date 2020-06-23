import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { CashierDetailComponent } from '../cashier-detail/cashier-detail.component';

@Component({
  selector: 'app-cashier-table',
  templateUrl: './cashier-table.component.html',
  styleUrls: ['./cashier-table.component.scss']
})
export class CashierTableComponent implements OnInit {

  public detailDialog = CashierDetailComponent;
  public path = 'http://localhost:8080/api/v1/comprobantes/ordenes';
  public title = 'Cajero';
  public icon = 'point_of_sale';
  public tableColumns = [
    { columnDef: 'id', header: 'Orden', cell: (orden: Orden) => `${orden.id}` },
    { columnDef: 'cliente', header: 'Cliente', cell: (orden: Orden) => `${orden.cliente.nombre} ${orden.cliente.apellido}` },
    { columnDef: 'horarioEntrega', header: 'Tiempo', cell: (orden: Orden) => `${orden.horarioEntrega}` },
    { columnDef: 'delivery', header: 'Envío', cell: (orden: Orden) => `${orden.delivery}` },
    { columnDef: 'estado', header: 'Estado', cell: (orden: Orden) => `${orden.estado.denominacion}` },
  ];
  public displayedColumns = this.tableColumns.map(c => c.columnDef);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(CashierDetailComponent, {
      panelClass: 'app-dialog',
      disableClose: true,
      width: '70%'
    });
  }

}
