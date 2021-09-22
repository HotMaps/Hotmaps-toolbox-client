import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import {Component, AfterContentInit, OnInit, ViewChild, OnDestroy} from '@angular/core';

import { LoaderService } from '../shared/services/loader.service';
import {Logger} from '../shared/services/logger.service';

declare let gtag: Function;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css'],

})

export class AppComponent implements OnInit , AfterContentInit, OnDestroy {
  /**
   * management of initial status of general loading
   * AppComponent own general loading
   */
  showLoader: boolean;
  isMap: boolean = true;
  private isIE: boolean = false;

  constructor(
    private loaderService: LoaderService, private logger: Logger, private router: Router) {

    this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd){
          gtag('config', 'UA-163693658-1',
            {
              'page_path': event.urlAfterRedirects
            }
          );
        }
      })
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
    this.isIE = /msie\s|trident\//i.test(window.navigator.userAgent)
    if (this.isIE) {
      this.router.navigate(['disclaimer_browser'])
    }

    this.router.events.subscribe(val =>
      this.isMap = ((val as any).url === '/' || (val as any).url === '/map')
    );

    if(this.router.url === '/register') {
      // console.log('isRegisterRoute')
    }
  }
}
