import { OdinWebPage } from './app.po';

describe('odin-web App', () => {
  let page: OdinWebPage;

  beforeEach(() => {
    page = new OdinWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
