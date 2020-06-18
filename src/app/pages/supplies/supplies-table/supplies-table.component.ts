import { Component, OnInit } from '@angular/core';
import { SuppliesDialogComponent } from '../supplies-dialog/supplies-dialog.component';
import { Insumo } from 'src/app/core/models/articulos/insumo';

@Component({
  selector: 'app-supplies-table',
  templateUrl: './supplies-table.component.html',
  styleUrls: ['./supplies-table.component.scss']
})
export class SuppliesTableComponent implements OnInit {

  public detailDialog = SuppliesDialogComponent;
  public path = 'http://localhost:8080/api/v1/insumos';
  public title = 'Insumos';
  public icon = 'shopping_basket';
  public actions = true;
  public tableColumns = [
    { columnDef: 'imagen', header: 'Imagen', cell: (insumo: Insumo) => `${insumo.imagen}` },
    { columnDef: 'denominacion', header: 'Denominación', cell: (insumo: Insumo) => `${insumo.denominacion}` },
    { columnDef: 'rubro', header: 'Rubro', cell: (insumo: Insumo) => `${insumo.rubro.denominacion}` },
    { columnDef: 'precio', header: 'Precio', cell: (insumo: Insumo) => `${insumo.precio}` },
    { columnDef: 'oculto', header: 'Publico', cell: (insumo: Insumo) => `${insumo.oculto}` }
  ];
  public displayedColumns = this.tableColumns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

}
