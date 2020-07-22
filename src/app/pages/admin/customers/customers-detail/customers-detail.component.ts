import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Cliente } from 'src/app/core/models/usuarios/cliente';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { AuthService } from 'src/app/shared/authentication/auth.service';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss']
})
export class CustomersDetailComponent implements OnInit {

  public localData: Cliente;

  public ordenes: Orden[];

  datesForm: FormGroup;

  displayedColumns: string[] = ['id', 'fecha', 'formaPago', 'delivery', 'estado'];

  get customerName() {
    return `${this.localData.nombre} ${this.localData.apellido}`;
  }

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Cliente,
    public dialogRef: MatDialogRef<CustomersDetailComponent>,
    private reportsService: ReportsService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.localData = { ...data };
    this.datesForm = fb.group({
      date: [{begin: new Date('2020-06-23'), end: new Date('2020-06-29')}]
    });
  }

  ngOnInit(): void {
    this.getOrdenes();
  }

  getOrdenes(){
    const fechaInicio = this.datesForm.get('date').value.begin;
    const fechaFin = this.datesForm.get('date').value.end;
    this.reportsService.getOrdenesPorPeriodo(this.localData.uid, fechaInicio, fechaFin).subscribe(
      res => {
        this.ordenes = res;
        console.log(res);
      }
    );
  }

  search(){
    this.getOrdenes();
  }

}
