/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare namespace L {
  namespace control {
    export function measure( options?: any): any;
  }

}
declare namespace L {
  namespace vectorGrid {
    export function slicer(data: any, options?: any): any;
  }
}
declare var require: NodeRequire;
interface NodeRequire {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
}


