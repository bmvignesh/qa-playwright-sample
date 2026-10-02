import { test, expect } from '@playwright/test';

test('Login flow works correctly', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.fill('input.new-todo', 'QA Automation Task');
  await page.press('input.new-todo', 'Enter');
  const todoCount = await page.locator('.todo-count').textContent();
  expect(todoCount).toContain('1 item left');
});
