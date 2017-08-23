import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class odinWebPage {
=======
export class OdinWebPage {
>>>>>>> 98b0f263b7699bb4e8f02d690f5e64545cc608c7
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
