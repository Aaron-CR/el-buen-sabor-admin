import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Categoria } from 'src/app/core/models/articulos/categoria';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-manufactured-categories-detail',
  templateUrl: './manufactured-categories-detail.component.html',
  styleUrls: ['./manufactured-categories-detail.component.scss']
})
export class ManufacturedCategoriesDetailComponent implements OnInit {

  public localData: Categoria;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Categoria,
    public dialogRef: MatDialogRef<ManufacturedCategoriesDetailComponent>
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
  }

  getPublicClass(oculto: boolean) {
    return oculto ? 'public' : 'private';
  }

}
