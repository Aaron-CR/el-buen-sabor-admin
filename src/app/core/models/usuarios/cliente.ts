import { Empleado } from './empleado';
import { DireccionDelivery } from '../direccion/direccion-delivery';

export interface Cliente extends Empleado {
  direccionesEnvio: Array<DireccionDelivery>;
}
