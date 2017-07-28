/**
 * Created by lesly on 13.07.17.
 */
import { browser, element, by } from 'protractor';
describe('population', () => {

  beforeEach(() => {
    browser.get('/map');
  });

  it('should have an input and search button', () => {
    expect(element(by.css('app-root htm-map hmt-search-bar input')).isPresent()).toEqual(true);
    expect(element(by.css('app-root htm-map hmt-search-bar button')).isPresent()).toEqual(true);
  });

  it('should allow searching', () => {
    const searchButton = element(by.css('button'));
    const searchBox = element(by.css('input'));
    searchBox.sendKeys('lausanne');
    searchButton.click().then(() => {
     // let list = element.all(by.css('app-search table tbody tr'));
     // expect(list.count()).toBe(3);
    });
  });
});
