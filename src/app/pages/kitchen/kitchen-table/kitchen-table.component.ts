import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { KitchenDetailComponent } from '../kitchen-detail/kitchen-detail.component';

@Component({
  selector: 'app-kitchen-table',
  templateUrl: './kitchen-table.component.html',
  styleUrls: ['./kitchen-table.component.scss']
})
export class KitchenTableComponent implements OnInit {

  public detailDialog = KitchenDetailComponent;
  public path = 'http://localhost:8080/api/v1/comprobantes/ordenes';
  public title = 'Cocina';
  public icon = 'restaurant';
  public tableColumns = [
    { columnDef: 'id', header: 'Orden', cell: (orden: Orden) => `${orden.id}` },
    { columnDef: 'cliente', header: 'Cliente', cell: (orden: Orden) => `${orden.cliente.nombre} ${orden.cliente.apellido}` },
    { columnDef: 'horarioEntrega', header: 'Tiempo', cell: (orden: Orden) => `${orden.horarioEntrega}` },
    { columnDef: 'delivery', header: 'Envío', cell: (orden: Orden) => `${orden.delivery}` },
    { columnDef: 'estado', header: 'Estado', cell: (orden: Orden) => `${orden.estado}` },
  ];
  public displayedColumns = this.tableColumns.map(c => c.columnDef);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(KitchenDetailComponent, {
      panelClass: 'app-dialog',
      disableClose: true,
      width: '70%'
    });
  }

}
