/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// proj4leaflet typings

declare namespace L {
  namespace control {
    export function measure( options?: any): any;
  }

}
declare namespace L {
  namespace control {
    export function measure( options?: any): any;
  }

}
declare namespace L {
  namespace  vectorGrid {
    export function slicer(data: any, options?: any): any;
  }
}


// leaflet.vectorGrid typings
declare namespace  L {
  namespace vectorGrid {
    export function protobuf(url: string, options?: any): any;
  }
}

declare namespace  L {
    export function virtualGrid({ }): any;
}

declare namespace  VirtualGrid {
  export function extend({ }): any;
}

declare var require: NodeRequire;
interface NodeRequire {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}


declare type Point = { x: number, y: number }
declare type XYArray = [number, number];
declare type PointObj = Point | XYArray;

declare type PredefinedDefName = "EPSG:4326" | "WGS84" | 'EPSG:4269' | 'EPSG:3857' | 'EPSG:3785' | 'GOOGLE' | 'EPSG:900913' | 'EPSG:102113'



interface Projector {
  /**
   * Performs a forward transformation.
   */
  forward<T extends PointObj>(coordinates: T): T
  /**
   * Performs an inverse transformation.
   */
  inverse<T extends PointObj>(coordinates: T): T
}

/**
 * Projects a point from one coordinate system to another.
 */
declare function proj4<T extends PointObj>(fromProjection: string | PredefinedDefName, toProjection: string | PredefinedDefName, coordinates: T): T;
/**
 * Projects a point from one coordinate system to another.
 */
declare function proj4<T extends PointObj>(fromProjection: string | PredefinedDefName, coordinates: T): T;
/**
 * Creates an object that will project from one coordinate system to another.
 */
declare function proj4(fromProjection: string | PredefinedDefName, toProjection?: string | PredefinedDefName): Projector;

// Add functions to the main function.

declare namespace proj4 {
  /**
   * Registers a projection for later use.
   * @param {string} name - The name used to retrieve the projection.
   * @param {string} definition - The proj4 projection definition string.
   */
  function defs(name: string, definition: string): void;
  /**
   * Defines multiple projections
   * @param {string[][]} definitions - An array of name, definition pair arrays.
   */
  function defs(definitions: [string, string][]): void;

  /**
   * Returns a registered projection.
   */
  function defs(name: string): string;
}

