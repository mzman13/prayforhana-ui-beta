import { PrayerAppUiPage } from './app.po';

describe('prayer-app-ui App', function() {
  let page: PrayerAppUiPage;

  beforeEach(() => {
    page = new PrayerAppUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
