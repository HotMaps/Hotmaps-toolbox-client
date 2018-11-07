import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserManagementService {
  private isUserLogged = new BehaviorSubject<boolean>(false);
  private userTocken = new BehaviorSubject<string>(null);
  private userLogin = new BehaviorSubject<string>(null);

}

