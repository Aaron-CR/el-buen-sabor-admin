import { OrderService } from './../../../services/order.service';
import { Component, OnInit, Input } from '@angular/core';
import { Estado } from 'src/app/core/models/comprobantes/estado';
import { HttpClient } from '@angular/common/http';

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
  public orderId: number;
  @Input()
  public data: Estado;
  @Input()
  public statuses: Array<Estado>;

  public selectedStatus: Estado;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  getStatusClass(status: string) {
    return status.replace(/\s+/g, '-');
  }

  changeStatus(newStatus){
    this.selectedStatus = newStatus;
    alert(this.selectedStatus.denominacion);
  }

  updateStatus(){
    alert(this.selectedStatus.denominacion + ', ' + this.orderId);
    this.orderService.updateEstado(this.selectedStatus, this.orderId).subscribe(
      res => {
        this.data = res.estado;
      }
    );
  }

}

