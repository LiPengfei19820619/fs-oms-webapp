import { FsOmsWebappPage } from './app.po';

describe('fs-oms-webapp App', () => {
  let page: FsOmsWebappPage;

  beforeEach(() => {
    page = new FsOmsWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
