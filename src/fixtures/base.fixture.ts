import { test as base } from '@playwright/test';
import { BasePage } from '@pages/base.page';
import { GoogleLandingPage } from '@pages/google-landing-page';

type Fixtures = {
  basePage: BasePage;
  googleLandingPage: GoogleLandingPage;
};

export const test = base.extend<Fixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  googleLandingPage: async ({ page }, use) => {
    await use(new GoogleLandingPage(page));
  },
});

export { expect } from '@playwright/test';
