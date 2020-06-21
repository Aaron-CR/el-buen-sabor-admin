import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ArticuloManufacturado } from 'src/app/core/models/articulos/articulo-manufacturado';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manufactured-detail',
  templateUrl: './manufactured-detail.component.html',
  styleUrls: ['./manufactured-detail.component.scss']
})
export class ManufacturedDetailComponent implements OnInit {

  public localData: ArticuloManufacturado;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ArticuloManufacturado,
    public dialogRef: MatDialogRef<ManufacturedDetailComponent>
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
  }

}
