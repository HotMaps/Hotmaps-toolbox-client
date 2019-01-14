/**
 * Created by lesly on 27.05.17.
 */
import {ILatLng} from "./latLng.interface";
import {LatLngBounds} from "leaflet";

export class LocationClass implements ILatLng {
  latitude: number;
  longitude: number;
  address: string;
  country:string;
  viewBounds: LatLngBounds;
}
