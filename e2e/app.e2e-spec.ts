import { RoyalRangersPage } from './app.po';

describe('royal-rangers App', () => {
  let page: RoyalRangersPage;

  beforeEach(() => {
    page = new RoyalRangersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
