import { AbodeAtlasPage } from './app.po';

describe('abode-atlas App', () => {
  let page: AbodeAtlasPage;

  beforeEach(() => {
    page = new AbodeAtlasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
