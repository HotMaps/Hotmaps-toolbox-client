export interface Value {
    value: number;
    unit: string;
    month: number;
    year: number;
    granularity: string;
    nuts_id: string;
    nuts_name: string;
    nuts_level: string;
  }
export interface HeatLoadClass {
  values: Value[];
}


