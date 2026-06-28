import { Locator, Page } from '@playwright/test';
import { BasePage } from '@pages/base.page';

export class GoogleLandingPage extends BasePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator('textarea[name="q"]');
    this.searchButton = page.locator('input[name="btnK"]').first();
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://www.google.com');
    await this.waitForLoad();
  }

  async search(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchInput.press('Enter');
    await this.page.waitForLoadState('networkidle');
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async isSearchInputVisible(): Promise<boolean> {
    return this.searchInput.isVisible();
  }
}
