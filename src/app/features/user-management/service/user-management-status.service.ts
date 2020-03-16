import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserManagementStatusService {
  private isUserLogged = new BehaviorSubject<boolean>(false);
  private userToken = new BehaviorSubject<string>(null);
  private username = new BehaviorSubject<string>(null);

  constructor() {
    const token = sessionStorage.getItem('token');
    if(token) {
      this.setUserToken(token);
      this.setUserIsLoggedIn();
    }
  }

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
    sessionStorage.removeItem('token');
    this.isUserLogged.next(false);
  }
  setUsername(username) {
    this.username.next(username);
  }
  setUserToken(token) {
    if(token) sessionStorage.setItem('token', token);
    else sessionStorage.removeItem('token');
    this.userToken.next(token);
  }
}

