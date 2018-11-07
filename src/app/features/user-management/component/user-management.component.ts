import { Component, OnInit } from '@angular/core';
import { UserManagementStatusService } from '../service/user-management-status.service';
import { subscribeOn } from 'rxjs/operator/subscribeOn';

@Component({
  selector: 'htm-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  private isLoggedIn;
  constructor(private userManagementStatusService: UserManagementStatusService) { }

  ngOnInit() {
    this.subscribe();
  }
  subscribe() {
    this.userManagementStatusService.getIsUserLogged().subscribe((data) => {
      this.isLoggedIn=data;
    })
  }
}
