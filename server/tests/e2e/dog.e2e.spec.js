import { test, expect } from '@playwright/test';

test('dog image loads on page load', async ({ page }) => {

  await page.goto('http://localhost:3000');

  const img = page.locator('img');

  const src = await img.getAttribute('src');

  expect(src).toBeTruthy();
  expect(src.startsWith('https://')).toBeTruthy();

});




test('dog image loads when button clicked', async ({ page }) => {

  await page.goto('http://localhost:3000');

  await page.click('button');

  const img = page.locator('img');

  const src = await img.getAttribute('src');

  expect(src).toBeTruthy();
  expect(src.startsWith('https://')).toBeTruthy();

});



test('shows error when API fails', async ({ page }) => {

  await page.route('**/api/dogs/random', route => route.abort());

  await page.goto('http://localhost:3000');

  const error = page.locator('text=/error/i');

  await expect(error).toBeVisible();

});