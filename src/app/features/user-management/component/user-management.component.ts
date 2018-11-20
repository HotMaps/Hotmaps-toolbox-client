import { Component, OnInit } from '@angular/core';
import { UserManagementStatusService } from '../service/user-management-status.service';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import * as uikit from 'uikit';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'htm-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  private isLoggedIn;
  private username = '';
  private token = '';
  private token_activation = '';
  constructor(private userManagementStatusService: UserManagementStatusService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribe();
  }
  subscribe() {
    this.route.params.subscribe( (params) => {
      if(params.token_activation){
        this.token_activation = params.token_activation;
        uikit.modal('#modal-activate').show()
      }
    });
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
