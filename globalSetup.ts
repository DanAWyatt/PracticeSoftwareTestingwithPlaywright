import { chromium } from '@playwright/test';
import { performLogin } from './fixtures/loginActions';

async function globalSetup(config: any) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await performLogin(page, {
    email: 'admin@practicesoftwaretesting.',
    password: 'welcome01',
  }, 'https://practicesoftwaretesting.com/');
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;