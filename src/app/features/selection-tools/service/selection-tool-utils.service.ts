import { Injectable } from '@angular/core';
import { Helper, Location } from 'app/shared';

@Injectable()
export class SelectionToolUtils {
    constructor(private helper: Helper) { }

    getLocationsFromCicle(layer): Location[] {
        return this.helper.getLocationsFromCicle(layer);
    }

    getIdSelectionFromLayer(layer: any): boolean {
        return this.getSelectionIdFromLayer(layer)
    }
    getSelectionIdFromLayer(layer): any {
        let id_selection = this.helper.getNUTSIDFromGeoJsonLayer(layer);
        if (this.helper.isNullOrUndefined(id_selection) === true) {
            id_selection = this.helper.getLAU2IDFromGeoJsonLayer(layer);
        }
        return id_selection
    }

    layersAsLayer(layers): boolean {
        let hasLayer = false;
        if (layers.getLayers().length > 0) {
            hasLayer = true;
        }
        return hasLayer;
    }
}
