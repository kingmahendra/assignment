import { GithubViewerPage } from './app.po';

describe('github-viewer App', () => {
  let page: GithubViewerPage;

  beforeEach(() => {
    page = new GithubViewerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
