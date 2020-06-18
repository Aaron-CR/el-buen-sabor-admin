import { Base } from '../base';
import { Categoria } from './categoria';
import { DetalleReceta } from './detalle-receta';

export interface ArticuloManufacturado extends Base {
  denominacion: string;
  descripcion: string;
  imagen: string;
  tiempoEstimadoCocina: number;
  categoria: Categoria;
  detallesReceta: Array<DetalleReceta>;
}
