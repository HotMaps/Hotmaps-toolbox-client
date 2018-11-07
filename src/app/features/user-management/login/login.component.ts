import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../service/user-management.service';
import { UserManagementStatusService } from '../service/user-management-status.service';
import { WaitingStatusComponent } from '../../../shared/component/waiting-status';

@Component({
  moduleId: module.id,
  selector: 'htm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends WaitingStatusComponent implements OnInit  {
  private username='';
  private password='';
  constructor(private userManagementService: UserManagementService, private userManagementStatusService: UserManagementStatusService) {
    super();
  }

  ngOnInit() {
  }
  connect() {
    this.setWaitingStatus(true)
    const payload = { password: this.password, email: this.username };
    console.log(payload)
    this.userManagementService.userLogin(payload).then((data) => {
      this.setUserIsLoggedIn()
      console.log(data)
    }).catch(() => {
      this.setWaitingStatus(false)
    })
  }

  logout() {
    this.setWaitingStatus(true)
    this.userManagementService.userLogout().then((data) => {
      console.log(data)
    }).catch(() => {
      this.setWaitingStatus(false)
    })
  }
  setUserIsLoggedIn() {
    this.setWaitingStatus(false)
    this.userManagementStatusService.setUserIsLoggedIn()
  }
  setUserIsLoggedOut() {
    this.setWaitingStatus(false)
    this.userManagementStatusService.setUserIsLoggedOut()
  }
}
