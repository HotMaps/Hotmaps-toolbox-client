import { WaitingStatusComponent } from '../../../shared/component/waiting-status';
import { ToasterService } from '../../../shared/services/toaster.service';
import { Component, OnInit, Input } from '@angular/core';
import { UserManagementService } from '../service/user-management.service';

@Component({
  selector: 'htm-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent extends WaitingStatusComponent implements OnInit {
  @Input() token_activation;
  constructor(private userManagementService: UserManagementService, private toasterService: ToasterService) {
    super()
   }

  ngOnInit() {
  }

  activateUser() {
    const payload = { token: this.token_activation};
    this.userManagementService.userRegisterActivate(payload).then((data) => {
      this.toasterService.showToaster(data.message);
      this.token_activation='';
      window.location.href = '';
    })
  }
}
