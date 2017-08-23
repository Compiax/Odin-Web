<<<<<<< HEAD
import { odinWebPage } from './app.po';

describe('odin-web App', () => {
  let page: odinWebPage;

  beforeEach(() => {
    page = new odinWebPage();
=======
import { OdinWebPage } from './app.po';

describe('odin-web App', () => {
  let page: OdinWebPage;

  beforeEach(() => {
    page = new OdinWebPage();
>>>>>>> 98b0f263b7699bb4e8f02d690f5e64545cc608c7
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
