import { Injectable } from '@angular/core';


import {Properties} from './properties.utils';
import {Platform, platforms} from './platforms.utils';
import {Logger} from '../../shared';

@Injectable()
export class MailService {
  properties: Properties = {};
  platform: Platform;
  url: string;
    constructor(private logger: Logger) { }

    /**
    * Send the email
    */  
    sendEmail() {
      this.initService();
      window.open(this.url, 'newwindow', 'width=1070, height=600');
     // event.preventDefault();
    }
    initService() {
      if (!this.url) {
        this.platform = platforms['mail'];
        this.fetchProperties();
        this.constructUrl();
      }
    }

  /**
  * Fetch properties for the mail
  */    
  fetchProperties() {
    this.properties.url = this.properties.url || this.getMetaContent('og:url') || window.location.href.toString();
    this.properties.title = this.properties.title || this.getMetaContent('og:title') || document.title;
    this.properties.description = this.properties.description || this.getMetaContent('og:description');
    this.properties.image = this.properties.image || this.getMetaContent('og:image');
    this.properties.via = this.properties.via || this.getMetaContent('n2s:via');
    this.properties.hashtags = this.properties.hashtags || this.getMetaContent('n2s:hashtags');
    for (let p in this.properties) {
      if (this.properties.hasOwnProperty(p)) {
        this.properties[p] = encodeURIComponent(this.properties[p]);
      }
    }
  }

  /**
  * Construct the url for the mail 
  */ 
  constructUrl() {
    this.url = this.platform.url + this.properties.url;
    if (this.platform.properties) {
      for (let key in this.platform.properties) {
        // if the property has been found.
        let val = this.properties[this.platform.properties[key]];
        if (val) {
          this.url += `&${key}=${val}`;
        }
      }
    }
  }
  getMetaContent(property: string) {
    const elem = document.querySelector(`meta[property='${property}']`);
    if (elem)
      return elem.getAttribute('content');
    return '';
  }

}
