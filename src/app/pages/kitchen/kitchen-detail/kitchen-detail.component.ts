import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kitchen-detail',
  templateUrl: './kitchen-detail.component.html',
  styleUrls: ['./kitchen-detail.component.scss']
})
export class KitchenDetailComponent implements OnInit {

  public localData: Orden;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Orden,
    public dialogRef: MatDialogRef<KitchenDetailComponent>
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
  }

}
