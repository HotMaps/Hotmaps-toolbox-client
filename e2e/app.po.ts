import { browser, by, element } from 'protractor';

export class HotmapsToolboxClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root')).getText();
  }
}
