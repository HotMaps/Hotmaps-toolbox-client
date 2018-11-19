import { WaitingStatusComponent } from 'app/shared/component/waiting-status';
import { Payload } from './../../population/payload.class';
import { UserManagementService } from './../service/user-management.service';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'app/shared';
import { InteractionService } from 'app/shared/services/interaction.service';

@Component({
  selector: 'htm-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent extends WaitingStatusComponent implements OnInit {
  private submitedRecover = false;
  private email = '';
  private new_password = '';
  private token = '';
  constructor(private toasterService: ToasterService, private userManagementService:UserManagementService) {
    super()
   }

  ngOnInit() {
  }
  recoverAccountAsk() {
    this.setWaitingStatus(true)
    const payload = {email:this.email};
    this.userManagementService.userRecoverAsk(payload).then(()=> {
      this.setWaitingStatus(false)
      this.submitedRecover = true;
    }).catch(()=>{
      this.setWaitingStatus(false);
      this.submitedRecover = false;
    })
  }
  recoverAccount() {
    this.setWaitingStatus(true)
    const payload = {token:this.token, password:this.new_password};
    this.userManagementService.userRecover(payload).then((data) => {
      this.resetRecoverComponent()
      this.toasterService.showToaster(data.message);
      this.setWaitingStatus(false);
      this.submitedRecover = false;
    }).catch(()=>{
      this.setWaitingStatus(false);
    })

  }
  resetRecoverComponent() {
    this.email = '';
    this.new_password = '';
    this.token = '';
  }
}
