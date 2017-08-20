import { NghttpPage } from './app.po';

describe('nghttp App', () => {
  let page: NghttpPage;

  beforeEach(() => {
    page = new NghttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
