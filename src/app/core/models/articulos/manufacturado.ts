import { Articulo } from './articulo';
import { Categoria } from './categoria';
import { DetalleReceta } from './detalle-receta';

export interface Manufacturado extends Articulo {
  tiempoEstimadoCocina: number;
  categoria: Categoria;
  detallesReceta: Array<DetalleReceta>;
}
