import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserManagementStatusService {
  private isUserLogged = new BehaviorSubject<boolean>(false);
  private userToken = new BehaviorSubject<string>(null);
  private username = new BehaviorSubject<string>(null);

  getUserToken() {
    return this.userToken;
  }
  getIsUserLogged() {
    return this.isUserLogged;
  }
  getUsername() {
    return this.username;
  }
  setUserIsLoggedIn() {
    this.isUserLogged.next(true);
  }
  setUserIsLoggedOut() {
    this.isUserLogged.next(false);
  }
  setUsername(username) {
    this.username.next(username);
  }
  setUserToken(token) {
    this.userToken.next(token);
  }
}

