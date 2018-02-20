import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SelectionToolButtonStateService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  enable(value: boolean) {
    this.status.next(value);
  }
}
