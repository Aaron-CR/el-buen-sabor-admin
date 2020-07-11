import { Component } from '@angular/core';
import { ArticuloManufacturado } from 'src/app/core/models/articulos/articulo-manufacturado';
import { ManufacturedDetailComponent } from '../manufactured-detail/manufactured-detail.component';
import { ManufacturedFormComponent } from '../manufactured-form/manufactured-form.component';

@Component({
  selector: 'app-manufactured-table',
  templateUrl: './manufactured-table.component.html',
  styleUrls: ['./manufactured-table.component.scss']
})
export class ManufacturedTableComponent {

  public formDialog = ManufacturedFormComponent;
  public detailDialog = ManufacturedDetailComponent;
  public path = 'http://localhost:8080/api/v1/articulos/manufacturados';
  public router = '/manufactured-categories';
  public routerText = 'Categorias';
  public title = 'Manufacturados';
  public icon = 'storefront';
  public tableColumns = [
    { columnDef: 'imagen', header: 'Imagen', cell: (manufacturado: ArticuloManufacturado) => `${manufacturado.imagen}` },
    { columnDef: 'denominacion', header: 'Denominación', cell: (manufacturado: ArticuloManufacturado) => `${manufacturado.denominacion}` },
    { columnDef: 'categoria', header: 'Categoria', cell: (manufacturado: ArticuloManufacturado) => `${manufacturado.categoria.denominacion}` },
    { columnDef: 'precio', header: 'Precio', cell: (manufacturado: ArticuloManufacturado) => `${manufacturado.precio}` },
    { columnDef: 'cantidad', header: 'Ingredientes', cell: (manufacturado: ArticuloManufacturado) => `${manufacturado.detallesReceta.length} articulos` },
    { columnDef: 'oculto', header: 'Publico', cell: (manufacturado: ArticuloManufacturado) => `${manufacturado.oculto}` }
  ];

  constructor() { }

}
