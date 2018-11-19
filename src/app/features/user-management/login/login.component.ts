import { InteractionService } from './../../../shared/services/interaction.service';
import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../service/user-management.service';
import { UserManagementStatusService } from '../service/user-management-status.service';
import { WaitingStatusComponent } from '../../../shared/component/waiting-status';
import { ToasterService } from 'app/shared';

@Component({
  moduleId: module.id,
  selector: 'htm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends WaitingStatusComponent implements OnInit  {
  private username='albain.dufils@crem.ch';
  private password='crem';
  private token='';
  constructor(private userManagementService: UserManagementService, private userManagementStatusService: UserManagementStatusService,
    private toasterService: ToasterService) {
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
    }).catch(() => {
      this.setWaitingStatus(false)
    })
  }

  setUserIsLoggedIn() {
    this.userManagementStatusService.setUserToken(this.token);
    this.userManagementStatusService.setUserIsLoggedIn();
    this.userManagementStatusService.setUsername(this.username);
    this.setWaitingStatus(false)
  }

}
