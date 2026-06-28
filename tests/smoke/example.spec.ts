import { test, expect } from '@fixtures/base.fixture';

test.describe('Smoke', () => {
  test('example smoke test loads the homepage', async ({ basePage, page }) => {
    await basePage.goto('/');
    await basePage.waitForLoad();

    await expect(page).toHaveTitle(/Playwright/);
  });
});
