import { Ng2MeanPage } from './app.po';

describe('ng2-mean App', () => {
  let page: Ng2MeanPage;

  beforeEach(() => {
    page = new Ng2MeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
