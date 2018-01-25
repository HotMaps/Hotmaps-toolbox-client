import {Component, AfterContentInit, OnInit, ViewChild, OnDestroy} from '@angular/core';

import { LoaderService } from '../shared/services/loader.service';
import {Logger} from '../shared/services/logger.service';


@Component({
  selector: 'app-root',
  template: `<router-outlet><span *ngIf="showLoader" class="loader-app"><div uk-spinner="ratio:4"></div></span></router-outlet>`,
  styles: [ require<any>('./app.component.css')],

})

export class AppComponent implements OnInit , AfterContentInit, OnDestroy {





  /**
   * management of initial status of general loading
   * AppComponent own general loading
   */
  showLoader: boolean;

  constructor(
    private loaderService: LoaderService, private logger: Logger) {
  }

  ngAfterContentInit(): void {

   this.notifyLoaderService();

  }
  /**
   * subcribe the status of the loader service
   * AppComponent own general loading
   */
  notifyLoaderService() {

    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

  ngOnDestroy() {
    this.logger.log('AppComponent/ngOnDestroy');
  }
  ngOnInit() {
  }


}
