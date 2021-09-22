import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../service/user-management.service';
import { UserManagementStatusService } from '../service/user-management-status.service';
import { WaitingStatusComponent } from '../../../shared/component/waiting-status';
import { ToasterService } from 'app/shared';
import {GoogleAnalyticsService} from "../../../google-analytics.service";


@Component({
  moduleId: module.id,
  selector: 'htm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends WaitingStatusComponent implements OnInit  {
  username='';
  password='';
  private token='';
  constructor(private userManagementService: UserManagementService, private userManagementStatusService: UserManagementStatusService,
    private toasterService: ToasterService, private googleAnalyticsService:GoogleAnalyticsService) {
    super();
  }

  ngOnInit() {
  }

  connect() {
    this.setWaitingStatus(true)
    const payload = { password: this.password, email: this.username };
    this.userManagementService.userLogin(payload).then((data) => {
      this.token = data.token;
      this.toasterService.showToaster(data.message);
      this.setUserIsLoggedIn()

      this.googleAnalyticsService
        .eventEmitter("user_connect", "user", "connect", "click");
    }).catch(() => {
      this.setWaitingStatus(false);
      this.userManagementStatusService.setUserIsLoggedOut();
    })
  }

  setUserIsLoggedIn() {
    this.userManagementStatusService.setUserToken(this.token);
    this.userManagementStatusService.setUserIsLoggedIn();
    this.userManagementStatusService.setUsername(this.username);

    this.setWaitingStatus(false)
  }

}
