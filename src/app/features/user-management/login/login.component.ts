import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../service/user-management.service';

@Component({
  selector: 'htm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username='albain.dufils@crem.ch';
  private password='test';
  constructor(private userManagementService: UserManagementService) { }

  ngOnInit() {
  }
  connect() {
    const payload = { password: this.password, email: this.username };
    console.log(payload)
    this.userManagementService.userLogin(payload).then((data) => {
      console.log(data)
    })
  }
  logout() {
    this.userManagementService.userLogout().then((data) => {
      console.log(data)
    })
  }
}
