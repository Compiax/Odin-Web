import { odinWebPage } from './app.po';

describe('odin-web App', () => {
  let page: odinWebPage;

  beforeEach(() => {
    page = new odinWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
