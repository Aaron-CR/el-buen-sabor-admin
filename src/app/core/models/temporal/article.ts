import { Base } from '../base';

export interface Article extends Base {
  name: string;
  category: string;
  unitPrice: number;
  stockUnits: number;
}
