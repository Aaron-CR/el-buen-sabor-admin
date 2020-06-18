import { Component, OnInit } from '@angular/core';
import { Rubro } from 'src/app/core/models/articulos/rubro';
import { SuppliesCategoriesDetailComponent } from '../supplies-categories-detail/supplies-categories-detail.component';
import { SuppliesCategoriesFormComponent } from '../supplies-categories-form/supplies-categories-form.component';

@Component({
  selector: 'app-supplies-categories-table',
  templateUrl: './supplies-categories-table.component.html',
  styleUrls: ['./supplies-categories-table.component.scss']
})
export class SuppliesCategoriesTableComponent implements OnInit {

  public detailDialog = SuppliesCategoriesDetailComponent;
  public formDialog = SuppliesCategoriesFormComponent;
  public path = 'http://localhost:8080/api/v1/rubros';
  public title = 'Rubros';
  public icon = 'list_alt';
  public tableColumns = [
    { columnDef: 'imagen', header: 'Imagen', cell: (rubro: Rubro) => `${rubro.imagen}` },
    { columnDef: 'denominacion', header: 'Denominación', cell: (rubro: Rubro) => `${rubro.denominacion}` },
    { columnDef: 'oculto', header: 'Público', cell: (rubro: Rubro) => `${rubro.oculto}` }
  ];
  public displayedColumns = this.tableColumns.map(c => c.columnDef);

  constructor() { }

  ngOnInit(): void {
  }

}
