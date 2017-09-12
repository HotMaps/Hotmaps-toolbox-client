import {Component, AfterContentInit, OnInit, ViewChild} from '@angular/core';

import { LoaderService } from './shared/services/loader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [ require<any>('./app.component.css')],

})

export class AppComponent implements OnInit , AfterContentInit {




  // management of initial status of general loading
  showLoader: boolean;

  constructor(
    private loaderService: LoaderService) {
  }

  ngAfterContentInit(): void {
   this.notifyLoaderService();

  }

  notifyLoaderService() {

    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }


  ngOnInit() {
  }


}
