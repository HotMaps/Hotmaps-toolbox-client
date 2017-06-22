import { HotmapsToolboxClientPage } from './app.po';

describe('hotmaps-toolbox-client App', () => {
  let page: HotmapsToolboxClientPage;

  beforeEach(() => {
    page = new HotmapsToolboxClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
