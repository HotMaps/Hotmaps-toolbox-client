import { Router, ActivatedRoute } from '@angular/router';
import {Component, AfterContentInit, OnInit, ViewChild, OnDestroy} from '@angular/core';

import { LoaderService } from '../shared/services/loader.service';
import {Logger} from '../shared/services/logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [ require<any>('./app.component.css')],

})

export class AppComponent implements OnInit , AfterContentInit, OnDestroy {
  /**
   * management of initial status of general loading
   * AppComponent own general loading
   */
  private showLoader: boolean;
  private isMap: boolean = false;

  constructor(
    private loaderService: LoaderService, private logger: Logger, private router: Router) {
  }

  ngAfterContentInit(): void {
   this.notifyLoaderService();
  }
  /**
   * subcribe the status of the loader service
   * AppComponent own general loading
   */
  notifyLoaderService() {

    this.loaderService.getStatus().subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }

  ngOnDestroy() {
    this.logger.log('AppComponent/ngOnDestroy');
  }

  ngOnInit() {
     this.router.events.subscribe(val =>
      this.isMap = (val as any).url === '/map'
    );

    if(this.router.url === '/register') {
      console.log('isRegisterRoute')
    }
  }
}
