/**
 * Created by lesly on 09.06.17.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Logger} from '../../shared/services/logger.service';

@Component({
  selector: 'htm-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.scss' ]

})

export class RegisterComponent implements OnInit {
  constructor(private router: Router, private logger: Logger) {
  }
  ngOnInit(): void {
    this.logger.log('RegisterComponent/ngOnInit()');
  }
  submit(): void {
    this.logger.log('RegisterComponent/submit()');
    this.router.navigate(['/map']);
  }
}
