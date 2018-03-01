/**
 * Created by lesly on 19.06.17.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {
  private status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  display(value: boolean) {
    this.status.next(value);
  }

 getStatus(): BehaviorSubject<boolean> {
  return this.status;
 }
}
