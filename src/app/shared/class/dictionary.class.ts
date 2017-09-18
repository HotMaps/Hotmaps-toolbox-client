export interface  IDictionary {
  add(key: string, value: any): void;
  remove(key: string): void;
  containsKey(key: string): boolean;
  keys(): string[];
  values(): any[];
  value(key: string): any;
}

export class Dictionary {

  _keys: string[] = [];
  _values: any[] =  [];

  constructor(init: { key: string; value: any; }[]) {

    for (let x = 0; x < init.length; x++) {
      this[init[x].key] = init[x].value;
      this._keys.push(init[x].key);
      this._values.push(init[x].value);
    }
  }

  add(key: string, value: any) {
    this[key] = value;
    this._keys.push(key);
    this._values.push(value);
  }

  value(key: string) {
    const index = this._keys.indexOf(key, 0);
    return this._values[index];
  }

  remove(key: string) {
    const index = this._keys.indexOf(key, 0);
    this._keys.splice(index, 1);
    this._values.splice(index, 1);

    delete this[key];
  }

  keys(): string[] {
    return this._keys;
  }
  containsKey(key: string) {
    if (typeof this[key] === 'undefined') {
      return false;
    }

    return true;
  }

}
