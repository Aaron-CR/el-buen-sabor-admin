import { Base } from '../base';

export interface Articulo extends Base {
  denominacion: string;
  descripcion: string;
  imagen: string;
  precio: number;
}
