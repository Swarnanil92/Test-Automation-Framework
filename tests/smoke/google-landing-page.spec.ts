import { test, expect } from '@fixtures/base.fixture';

test.describe('Google Landing Page', () => {
  test.beforeEach(async ({ googleLandingPage }) => {
    await googleLandingPage.navigate();
  });

  test('should display the Google homepage title', async ({ googleLandingPage }) => {
    const title = await googleLandingPage.getTitle();
    expect(title).toContain('Google');
  });

  test('should display the search input on the landing page', async ({ googleLandingPage }) => {
    const isVisible = await googleLandingPage.isSearchInputVisible();
    expect(isVisible).toBe(true);
  });

  test('should navigate to results page after searching', async ({ googleLandingPage, page }) => {
    await googleLandingPage.search('Playwright testing');

    await expect(page).toHaveURL(/google\.com\/search/);
    await expect(page).toHaveTitle(/Playwright testing/i);
  });
});
