import { Ng2caasPage } from './app.po';

describe('ng2caas App', () => {
  let page: Ng2caasPage;

  beforeEach(() => {
    page = new Ng2caasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
