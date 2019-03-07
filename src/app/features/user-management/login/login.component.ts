import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../service/user-management.service';
import { UserManagementStatusService } from '../service/user-management-status.service';
import { WaitingStatusComponent } from '../../../shared/component/waiting-status';
import { ToasterService } from 'app/shared';
import { InteractionService } from 'app/shared/services/interaction.service';

@Component({
  moduleId: module.id,
  selector: 'htm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends WaitingStatusComponent implements OnInit  {
  private username='';
  private password='';
  private token='';
  constructor(private userManagementService: UserManagementService, private userManagementStatusService: UserManagementStatusService,
    private toasterService: ToasterService, private interactionService: InteractionService) {
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

    this.interactionService.enableButtonWithId('save');
    this.interactionService.enableButtonWithId('folder');
    this.setWaitingStatus(false)
  }

}
