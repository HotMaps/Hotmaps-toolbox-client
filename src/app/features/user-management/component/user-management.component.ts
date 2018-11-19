import { Component, OnInit } from '@angular/core';
import { UserManagementStatusService } from '../service/user-management-status.service';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import * as uikit from 'uikit';

@Component({
  selector: 'htm-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  private isLoggedIn;
  private username = '';
  private token = '';
  constructor(private userManagementStatusService: UserManagementStatusService) { }

  ngOnInit() {
    this.subscribe();
  }
  subscribe() {
    this.userManagementStatusService.getIsUserLogged().subscribe((data) => {
      this.isLoggedIn=data;
      if(this.isLoggedIn) {
        this.closeLogin()
      } else {
        this.closeAccount()
      }
    })
    this.userManagementStatusService.getUserToken().subscribe((data) => {
      this.token=data;
    })
    this.userManagementStatusService.getUsername().subscribe((data) => {
      this.username = data;
    })
  }

  closeAccount() {
    uikit.modal('#modal-account').hide()
  }
  closeLogin() {
    uikit.modal('#modal-login').hide()
  }
}
