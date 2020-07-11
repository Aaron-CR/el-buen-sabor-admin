import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estado } from 'src/app/core/models/comprobantes/estado';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cashier-detail',
  templateUrl: './cashier-detail.component.html',
  styleUrls: ['./cashier-detail.component.scss']
})
export class CashierDetailComponent implements OnInit {

  public localData: Orden;
  public statuses: Array<Estado>;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Orden,
    public dialogRef: MatDialogRef<CashierDetailComponent>,
    private http: HttpClient
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
    this.getStatuses();
  }

  getStatuses() {
    return this.http.get(`http://localhost:8080/api/v1/comprobantes/estados/all`).pipe()
      .subscribe((data: Array<Estado>) => {
        switch (this.localData.estado.denominacion) {
          case 'pendiente':
            return this.statuses = data.filter(status => status.denominacion === 'cancelado' || status.denominacion === 'en proceso');
          case 'cancelado':
            return this.statuses = data.filter(status => status.denominacion === 'pendiente' || status.denominacion === 'en proceso');
          case 'en proceso':
            return this.statuses = data.filter(status => status.denominacion === 'demorado' || status.denominacion === 'listo');
          case 'demorado':
            return this.statuses = data.filter(status => status.denominacion === 'demorado' || status.denominacion === 'listo');
          case 'listo':
            return this.statuses = data.filter(status => status.denominacion === 'en camino' || status.denominacion === 'entregado');
          case 'en camino':
            return this.statuses = data.filter(status => status.denominacion === 'entregado');
          case 'entregado':
            return this.statuses = data.filter(status => status.denominacion === 'pagado');
          case 'pagado':
            return [];
          case 'anulado':
            return [];
          default:
            return this.statuses = data.filter(status => status.denominacion !== 'pagado' && status.denominacion !== 'anulado');
        }
      });
  }

}
