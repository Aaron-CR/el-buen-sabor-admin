import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/models/articulos/categoria';
import { ManufacturedCategoriesDetailComponent } from '../manufactured-categories-detail/manufactured-categories-detail.component';
import { ManufacturedCategoriesFormComponent } from '../manufactured-categories-form/manufactured-categories-form.component';

@Component({
  selector: 'app-manufactured-categories-table',
  templateUrl: './manufactured-categories-table.component.html',
  styleUrls: ['./manufactured-categories-table.component.scss']
})
export class ManufacturedCategoriesTableComponent implements OnInit {

  public detailDialog = ManufacturedCategoriesDetailComponent;
  public formDialog = ManufacturedCategoriesFormComponent;
  public path = 'http://localhost:8080/api/v1/articulos/categorias';
  public title = 'Categorías';
  public icon = 'list_alt';
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
