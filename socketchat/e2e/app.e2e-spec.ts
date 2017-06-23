import { SocketchatPage } from './app.po';

describe('socketchat App', () => {
  let page: SocketchatPage;

  beforeEach(() => {
    page = new SocketchatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
