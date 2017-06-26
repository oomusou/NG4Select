import { NG4SelectPage } from './app.po';

describe('ng4-select App', () => {
  let page: NG4SelectPage;

  beforeEach(() => {
    page = new NG4SelectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
