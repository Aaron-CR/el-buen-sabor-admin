import { Component, OnInit, Input } from '@angular/core';
import { Estado } from 'src/app/core/models/comprobantes/estado';
import { HttpClient } from '@angular/common/http';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { OrderService } from 'src/app/shared/services/order.service';

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  @Input()
  public data: Orden;
  @Input()
  public statuses: Array<Estado>;
  public allStatuses: Array<Estado>;
  public selectedStatus: Estado;

  constructor(
    private orderService: OrderService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    if (!this.statuses) {
      this.getStatuses();
    }
  }

  changeStatus(status: Estado) {
    this.selectedStatus = status;
  }

  updateStatus() {
    this.orderService.updateEstado(this.selectedStatus, this.data.id)
      .subscribe(data => {
        this.data = data;
        this.filterStatuses(this.allStatuses);
      });
  }

  getStatuses() {
    return this.http.get(`http://localhost:8080/api/v1/comprobantes/estados/all`).pipe()
      .subscribe((data: Array<Estado>) => {
        this.allStatuses = data;
        this.filterStatuses(this.allStatuses);
      });
  }

  filterStatuses(data: Array<Estado>) {
    switch (this.data.estado.denominacion) {
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
  }

  getStatusClass(status: string) {
    return status.replace(/\s+/g, '-');
  }

}

