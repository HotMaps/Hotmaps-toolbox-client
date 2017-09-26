/**
 * Created by lesly on 11.07.17.
 */


export interface Geometry {
  type: string;
  coordinates: number[][][][];
}

export interface Properties {
  gid: number;
  nuts_id: string;
  name: string;
  stat_levl_: number;
  shape_area: number;
  shape_len: number;
  bbox: number[];
}

export interface Feature {
  type: string;
  id: string;
  geometry: Geometry;
  geometry_name: string;
  properties: Properties;
}

export interface Properties2 {
  name: string;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Population {
  type: string;
  totalFeatures: string;
  features: Feature[];
  crs: Crs;
  bbox: number[];
}
