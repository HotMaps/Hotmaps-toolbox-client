import { WaitingStatusComponent } from 'app/shared/component/waiting-status';
import { UserManagementService } from './../service/user-management.service';
import { Component, OnInit, Input } from '@angular/core';
import { ToasterService } from 'app/shared';
import * as uikit from 'uikit';

@Component({
  selector: 'htm-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent extends WaitingStatusComponent implements OnInit {
  @Input() submitedRecover = false;
  private email = '';
  private new_password = '';
  @Input() token_recover;

  constructor(private toasterService: ToasterService, private userManagementService:UserManagementService) {
    super()
   }

  ngOnInit() {}
  recoverAccountAsk() {
    
    this.setWaitingStatus(true)
    const payload = {email:this.email};
    this.userManagementService.userRecoverAsk(payload).then(()=> {
      this.setWaitingStatus(false)
      this.resetRecoverComponent()
      this.toasterService.showToaster('Check your email address ('+this.email+') to change your password!')
      uikit.modal('#modal-recover').hide()
    }).catch(()=>{
      this.setWaitingStatus(false);
      this.submitedRecover = false;
    })
  }
  recoverAccount() {
    this.setWaitingStatus(true)
    const payload = {token:this.token_recover, password:this.new_password};
    this.userManagementService.userRecover(payload).then((data) => {
      this.resetRecoverComponent()
      this.toasterService.showToaster(data.message);
      this.setWaitingStatus(false);
      this.submitedRecover = false;
      window.location.href = '';
    }).catch(()=>{
      this.setWaitingStatus(false);
    })

  }
  resetRecoverComponent() {
    this.email = '';
    this.new_password = '';
    this.token_recover = '';
  }
}
