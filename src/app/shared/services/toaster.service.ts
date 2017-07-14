/**
 * Created by lesly on 14.07.17.
 */
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class ToasterService {

  constructor(private snackBar: MdSnackBar) {
  }

  showToaster(msg: string) {
    this.snackBar.open(msg, null, {
      duration: 3000,
    });
  }
}
