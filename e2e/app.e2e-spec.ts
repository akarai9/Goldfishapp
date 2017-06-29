import { GoldfishAppPage } from './app.po';

describe('goldfish-app App', () => {
  let page: GoldfishAppPage;

  beforeEach(() => {
    page = new GoldfishAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
