
  export interface Geometry {
    type: string;
    coordinates: number[];
  }

  export interface Properties {
    gid?: number;
    capacity?: string;
    power?: string;
    unit?: string;
    heat_density?: string;
    population_density?: string;
    date?: string;
    bbox?: number[];
  }



  export interface Feature {
    type: string;
    id: string;
    geometry?: Geometry;
    geometry_name?: string;
    properties: Properties;
  }

  export interface Properties2 {
    name: string;
  }

  export interface Crs {
    type: string;
    properties: Properties2;
  }

  export interface GeojsonClass {
    type: string;
    totalFeatures: string;
    features: Feature[];
    crs: number;
    bbox?: number[];
  }
