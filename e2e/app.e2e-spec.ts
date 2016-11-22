import { QuizzesPage } from './app.po';

describe('quizzes App', function() {
  let page: QuizzesPage;

  beforeEach(() => {
    page = new QuizzesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
