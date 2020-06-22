import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ArticuloInsumo } from 'src/app/core/models/articulos/articulo-insumo';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { StockFormComponent } from './stock-form/stock-form.component';

@Component({
  selector: 'app-supplies-detail',
  templateUrl: './supplies-detail.component.html',
  styleUrls: ['./supplies-detail.component.scss']
})
export class SuppliesDetailComponent implements OnInit {

  public localData: ArticuloInsumo;

  public displayedColumns = ['fechaMovimiento', 'cantidad', 'operacion'];

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ArticuloInsumo,
    public dialogRef: MatDialogRef<SuppliesDetailComponent>,
    private matDialog: MatDialog
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
  }

  addStock() {
    this.matDialog.open(StockFormComponent, {
      panelClass: 'app-dialog',
      data: this.localData
    });
  }

}
