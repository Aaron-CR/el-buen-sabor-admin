import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Rubro } from 'src/app/core/models/articulos/rubro';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-supplies-categories-detail',
  templateUrl: './supplies-categories-detail.component.html',
  styleUrls: ['./supplies-categories-detail.component.scss']
})
export class SuppliesCategoriesDetailComponent implements OnInit {

  public localData: Rubro;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Rubro,
    public dialogRef: MatDialogRef<SuppliesCategoriesDetailComponent>
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
  }

}
