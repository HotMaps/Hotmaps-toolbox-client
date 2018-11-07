import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserManagementStatusService {
  private isUserLogged = new BehaviorSubject<boolean>(false);
  private userTocken = new BehaviorSubject<string>(null);
  private userLogin = new BehaviorSubject<string>(null);


  getIsUserLogged() {
    return this.isUserLogged
  }
  setUserIsLoggedIn() {
    this.isUserLogged.next(true);
  }
  setUserIsLoggedOut() {
    this.isUserLogged.next(false);
  }
}

