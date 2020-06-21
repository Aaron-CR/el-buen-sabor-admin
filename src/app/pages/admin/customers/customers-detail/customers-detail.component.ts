import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Cliente } from 'src/app/core/models/usuarios/cliente';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss']
})
export class CustomersDetailComponent implements OnInit {

  public localData: Cliente;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Cliente,
    public dialogRef: MatDialogRef<CustomersDetailComponent>
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
  }

}
