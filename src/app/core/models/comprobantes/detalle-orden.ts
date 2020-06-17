import { Base } from '../base';
import { Articulo } from '../articulos/articulo';

export interface DetalleOrden extends Base {
  cantidad: number;
  precioTotal: number;
  articulo: Articulo;
}
