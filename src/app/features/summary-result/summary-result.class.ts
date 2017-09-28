import {Helper} from '../../shared/helper';

export class Value {
   name: string;
   unit: string;
   value: number;
  constructor( private helper: Helper ) {
    console.log('SummaryResultClass');
    this.value = this.helper.round(this.value)
  }
}

export class Layer {
  name: string;
  values: Value[];
}

export class SummaryResultClass {
  layers: Layer[];
}
