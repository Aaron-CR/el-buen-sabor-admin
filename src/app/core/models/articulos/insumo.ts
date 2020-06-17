import { Articulo } from './articulo';
import { HistorialStock } from './historial-stock';
import { Rubro } from './rubro';

export interface Insumo extends Articulo {
  costo: number;
  esInsumo: boolean;
  stockActual: number;
  stockMaximo: number;
  stockMinimo: number;
  unidadMedida: string;
  historialStock: Array<HistorialStock>;
  rubro: Rubro;
}
