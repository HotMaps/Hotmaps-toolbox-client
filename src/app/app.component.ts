import {Component, AfterContentInit, OnInit} from '@angular/core';

import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [ require<any>('./app.component.css')],

})

export class AppComponent implements OnInit , AfterContentInit {
  showLoader: boolean;

  constructor(
    private loaderService: LoaderService) {
  }

  ngAfterContentInit(): void {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

  ngOnInit() {
  }


}
