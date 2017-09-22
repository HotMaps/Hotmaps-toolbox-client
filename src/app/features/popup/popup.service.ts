import { GeojsonClass } from './../layers/class/geojson.class';
import { LatLng } from 'leaflet';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface PopupService {
    data: BehaviorSubject<GeojsonClass>;
    latlng: BehaviorSubject<LatLng>;
    title: BehaviorSubject<string>;
    visible: BehaviorSubject<boolean>;

    setData(data: GeojsonClass);
    setLatLng(latlng: any);
    setTitle(title: string);
    setVisibleStatus(visible: boolean);
}
