import { Insumo } from './insumo';
import { Base } from '../base';

export interface DetalleReceta extends Base {
  cantidad: number;
  insumo: Insumo;
}
