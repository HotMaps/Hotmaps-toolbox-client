



export class Layer {
  name: string;
  values: Value[];
}
export interface Value {
  name: string;
  value: string;
  unit: string;
}

export interface Layer {
  name: string;
  values: Value[];
}

export interface Properties {
  name: string;
}

export interface Crs {
  type: string;
  properties: Properties;
}

export interface Geometry {
  type: string;
  coordinates: number[][][][];
}

export interface Value2 {
  name: string;
  value: string;
  unit: string;
}

export interface Property {
  values: Value2[];
}

export interface Feature {
  type: string;
  id: number;
  geometry: Geometry;
  properties: Property[];
}

export interface Value3 {
  name: string;
  value: string;
  unit: string;
}

export interface Property2 {
  values: Value3[];
}

export interface FeatureCollection {
  type: string;
  crs: Crs;
  features: Feature[];
  properties: Property2[];
}



export class SummaryResultClass {
  layers: Layer[];
  feature_collection?: FeatureCollection;
}
