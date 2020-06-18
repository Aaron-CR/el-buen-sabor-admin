import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/models/articulos/categoria';
import { CategoriesDialogComponent } from '../categories-dialog/categories-dialog.component';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrls: ['./categories-table.component.scss']
})
export class CategoriesTableComponent implements OnInit {

  public detailDialog = CategoriesDialogComponent;
  public path = 'http://localhost:8080/api/v1/categorias';
  public title = 'Categorías';
  public icon = 'list_alt';
  public actions = true;
  public tableColumns = [
    { columnDef: 'imagen', header: 'Imagen', cell: (categoria: Categoria) => `${categoria.imagen}` },
    { columnDef: 'denominacion', header: 'Denominación', cell: (categoria: Categoria) => `${categoria.denominacion}` },
    { columnDef: 'oculto', header: 'Público', cell: (categoria: Categoria) => `${categoria.oculto}` }
  ];
  public displayedColumns = this.tableColumns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

}
