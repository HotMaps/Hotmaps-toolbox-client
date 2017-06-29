/**
 * Created by lesly on 09.06.17.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Logger} from '../shared/services/logger.service';

@Component({
  selector: 'htm-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.less' ]

})

export class LoginComponent implements OnInit {
  constructor(private router: Router, private logger: Logger) {
  }
  ngOnInit(): void {
    this.logger.log('LoginComponent/ngOnInit()');
  }
  submit(): void {
    this.logger.log('LoginComponent/submit()');
    this.router.navigate(['/map']);
  }
}
