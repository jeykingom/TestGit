import { AwesomeAppPage } from './app.po';

describe('awesome-app App', () => {
  let page: AwesomeAppPage;

  beforeEach(() => {
    page = new AwesomeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
