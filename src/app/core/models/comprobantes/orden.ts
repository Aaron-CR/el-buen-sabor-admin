import { Comprobante } from './comprobante';
import { Cliente } from '../usuarios/cliente';
import { DireccionDelivery } from '../direccion/direccion-delivery';
import { Empleado } from '../usuarios/empleado';

export interface Orden extends Comprobante {
  delivery: boolean;
  horarioEntrega: Date;
  cliente: Cliente;
  direccionEntrega: DireccionDelivery;
  repartidor: Empleado;
}
