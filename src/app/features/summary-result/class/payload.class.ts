import { Layer } from '../summary-result.class';
import {Location } from '../../../shared/class/location/location';

export class PayloadStat  {
    layers: string[];
    year: number;
    points: Location[];
}
export class PlayloadStatNuts {
  layers: string[];
  year: number;
  nuts: string[];
}
export interface PayloadStatHectar {
  layers: string[],
  areas: Area[],
  year: number
}
export interface Area {
  points: Location[]
}
