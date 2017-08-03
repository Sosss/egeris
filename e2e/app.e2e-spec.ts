import { EgerisPage } from './app.po';

describe('egeris App', () => {
  let page: EgerisPage;

  beforeEach(() => {
    page = new EgerisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
