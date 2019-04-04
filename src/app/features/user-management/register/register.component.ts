import {Location} from '@angular/common';
import {WaitingStatusComponent} from './../../../shared/component/waiting-status';
import {ToasterService} from './../../../shared/services/toaster.service';
import {Component, Input, OnInit} from '@angular/core';
import {UserManagementService} from './../service/user-management.service';

import * as uikit from 'uikit';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'htm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends WaitingStatusComponent implements OnInit {
  @Input() token_activation;
  private email = '';
  private password = '';
  private lastname = '';
  private firstname = '';
  private captcha;

  reactiveForm: FormGroup;

  constructor(private userManagementService: UserManagementService, private toasterService: ToasterService) {
    super()
  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      recaptchaReactive: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
    });

  }

  createAccount() {
    this.setWaitingStatus(true)
    const payload = {
      email: this.reactiveForm.get('email').value, password: this.reactiveForm.get('password').value,
      first_name: this.reactiveForm.get('firstname').value, last_name: this.reactiveForm.get('lastname').value
    };
    console.log(payload)
    this.userManagementService.userRegister(payload).then((data) => {
      this.toasterService.showToaster(data.message + '. <br />An email has been sent to your mail address (' + this.email + '). <br />Please press the link in the mail to activate your account.')
      this.closePanel()
      this.resetProcess();
    }).catch(()=>{
      this.resetProcess()
    });
  }
  resetProcess() {
    this.resetRegisterForm();
    this.setWaitingStatus(false)
  }
  closePanel() {
    uikit.modal('#modal-register').hide()
  }
  activateUser() {
    const payload = {token: this.token_activation};
    this.userManagementService.userRegisterActivate(payload).then((data) => {
      this.toasterService.showToaster(data.message);
      this.token_activation = '';
    })
    this.closePanel()
    // this.location.replaceState('/map')
  }

  resetRegisterForm() {
    this.reactiveForm.reset();
    this.reactiveForm.controls.recaptchaReactive.reset();
    console.log(this.reactiveForm.get('recaptchaReactive'));
  }
}
