import { Component, OnInit } from '@angular/core';

export interface OrderStatus {
  estado: string;
  actualizadoEl: string;
  actualizadoPor: string;
}

const ORDER_STATUS_DATA: OrderStatus[] = [
  { estado: 'Pendiente', actualizadoEl: 'Apr 2, 2018 12:34:32', actualizadoPor: 'Nombre Apellido' },
  { estado: 'Cancelado', actualizadoEl: 'Apr 2, 2018 12:34:32', actualizadoPor: 'Nombre Apellido' },
  { estado: 'En proceso', actualizadoEl: 'Apr 2, 2018 12:34:32', actualizadoPor: 'Nombre Apellido' },
  { estado: 'Demorado', actualizadoEl: 'Apr 2, 2018 12:34:32', actualizadoPor: 'Nombre Apellido' },
  { estado: 'Listo', actualizadoEl: 'Apr 2, 2018 12:34:32', actualizadoPor: 'Nombre Apellido' },
  { estado: 'Terminado', actualizadoEl: 'Apr 2, 2018 12:34:32', actualizadoPor: 'Nombre Apellido' },
  { estado: 'En camino', actualizadoEl: 'Apr 2, 2018 12:34:32', actualizadoPor: 'Nombre Apellido' },
  { estado: 'Entregado', actualizadoEl: 'Apr 2, 2018 12:34:32', actualizadoPor: 'Nombre Apellido' }
];

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

  orderStatusColumns: string[] = ['estado', 'actualizadoEl', 'actualizadoPor'];
  orderStatusDataSource = ORDER_STATUS_DATA;

  statuses: Status[] = [
    { value: '1', viewValue: 'Pendiente' },
    { value: '2', viewValue: 'Cancelado' },
    { value: '3', viewValue: 'En proceso' },
    { value: '4', viewValue: 'Demorado' },
    { value: '5', viewValue: 'Listo' },
    { value: '6', viewValue: 'En camino' },
    { value: '7', viewValue: 'Entregado' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getClass(row) {
    switch (row.estado) {
      case 'Pendiente': { return 'pendiente'; }
      case 'Cancelado': { return 'cancelado'; }
      case 'En proceso': { return 'en-proceso'; }
      case 'Demorado': { return 'demorado'; }
      // case 'Listo': { return 'listo'; }
      case 'Terminado': { return 'listo'; }
      case 'En camino': { return 'en-camino'; }
      case 'Entregado': { return 'entregado'; }
      default: { return ''; }
    }
  }

}

