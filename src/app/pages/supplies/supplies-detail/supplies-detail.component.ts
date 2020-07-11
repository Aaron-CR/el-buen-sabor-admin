import { Component, Optional, Inject } from '@angular/core';
import { ArticuloInsumo } from 'src/app/core/models/articulos/articulo-insumo';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { StockFormComponent } from './stock-form/stock-form.component';
import { SupplyService } from 'src/app/shared/services/supply.service';

@Component({
  selector: 'app-supplies-detail',
  templateUrl: './supplies-detail.component.html',
  styleUrls: ['./supplies-detail.component.scss']
})
export class SuppliesDetailComponent {

  public localData: ArticuloInsumo;
  public displayedColumns = ['fechaMovimiento', 'cantidad', 'operacion'];

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ArticuloInsumo,
    private matDialog: MatDialog,
    private supplyService: SupplyService
  ) {
    this.localData = { ...data };
  }

  onAddStock() {
    this.matDialog.open(StockFormComponent, {
      panelClass: 'app-dialog',
      data: this.localData.unidadMedida
    }).afterClosed().subscribe(result => {
      if (result.event === 'Añadir') {
        this.addStock(result.data);
      }
    });
  }

  addStock(data: any) {
    this.supplyService.addStock(this.localData.id, data.cantidad);
  }

}
