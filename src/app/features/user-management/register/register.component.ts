import { WaitingStatusComponent } from './../../../shared/component/waiting-status';
import { ToasterService } from './../../../shared/services/toaster.service';
import { Component, OnInit } from '@angular/core';
import { UserManagementService } from './../service/user-management.service';
import * as uikit from 'uikit';

@Component({
  selector: 'htm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends WaitingStatusComponent implements OnInit {
  private email='';
  private password='';
  private lastname='';
  private firstname='';
  constructor(private userManagementService: UserManagementService, private toasterService: ToasterService) {
    super()
   }

  ngOnInit() {
  }
  createAccount() {
    this.setWaitingStatus(true)
    const payload = { email: this.email, password: this.password, first_name:this.firstname, last_name: this.lastname }
    this.userManagementService.userRegister(payload).then((data) => {
      this.toasterService.showToaster(data.message + '. <br />An email has been sent to your mail address (' + this.email + '). <br />Please press the link in the mail to activate your account.')
      this.closePanel()
      this.resetRegisterForm();
      this.setWaitingStatus(false)
    });
  }
  closePanel() {
    uikit.modal('#modal-register').hide()
  }
  resetRegisterForm() {
    this.email='';
    this.password='';
    this.lastname='';
    this.firstname='';
  }
}
