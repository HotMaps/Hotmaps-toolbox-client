export class Value {
  name: string;
  value: number;
  unit: string;
}

export class Layer {
  name: string;
  values: Value[];
}

export class SummaryResultClass {
  layers: Layer[];
}
