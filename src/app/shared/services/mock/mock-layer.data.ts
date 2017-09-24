import { GeojsonClass } from './../../../features/layers/class/geojson.class';


export const DataLayerRequest: any = {
    type: 'FeatureCollection',
    totalFeatures: 'unknown',
    features: [
        {
            type: 'Feature',
            id: 'wwtp.26731',
            geometry: {
                type: 'Point',
                coordinates: [
                    -0.056,
                    45.6072
                ]
            },
            geometry_name: 'geom',
            properties: {
                gid: 26731,
                capacity: 3000,
                power: 193.333333299999993,
                unit: 'kW',
                date: '2015-01-01Z',
                bbox: [
                    -0.056,
                    45.6072,
                    -0.056,
                    45.6072
                ]
            }
        }
    ],
    crs: {
        type: 'name',
        properties: {
            name: 'urn:ogc:def:crs:EPSG::4326'
        }
    },
    bbox: [
        -0.056,
        45.6072,
        -0.056,
        45.6072
    ]
};


