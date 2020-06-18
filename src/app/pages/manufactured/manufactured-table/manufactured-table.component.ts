import { Component, OnInit } from '@angular/core';
import { Manufacturado } from 'src/app/core/models/articulos/manufacturado';
import { ManufacturedDialogComponent } from '../manufactured-dialog/manufactured-dialog.component';

@Component({
  selector: 'app-manufactured-table',
  templateUrl: './manufactured-table.component.html',
  styleUrls: ['./manufactured-table.component.scss']
})
export class ManufacturedTableComponent implements OnInit {

  public detailDialog = ManufacturedDialogComponent;
  public path = 'http://localhost:8080/api/v1/manufacturados';
  public title = 'Manufacturados';
  public icon = 'storefront';
  public actions = true;
  public tableColumns = [
    { columnDef: 'imagen', header: 'Imagen', cell: (manufacturado: Manufacturado) => `${manufacturado.imagen}` },
    { columnDef: 'denominacion', header: 'Denominación', cell: (manufacturado: Manufacturado) => `${manufacturado.denominacion}` },
    { columnDef: 'categoria', header: 'Categoria', cell: (manufacturado: Manufacturado) => `${manufacturado.categoria.denominacion}` },
    { columnDef: 'precio', header: 'Precio', cell: (manufacturado: Manufacturado) => `${manufacturado.precio}` },
    { columnDef: 'oculto', header: 'Publico', cell: (manufacturado: Manufacturado) => `${manufacturado.oculto}` }
  ];
  public displayedColumns = this.tableColumns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

}
