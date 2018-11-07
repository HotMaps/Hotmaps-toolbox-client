import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'htm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private email='';
  private password='';
  private lastname='';
  private firstname='';
  private registerForm;
  constructor() { }

  ngOnInit() {
  }
  createAccount() {
    const payload = { email: this.email, password: this.password, first_name:this.firstname, last_name: this.lastname }
    console.log(payload)
  }

}
