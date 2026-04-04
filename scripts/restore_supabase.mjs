import { chromium } from 'playwright';

const PROJECT_URL = 'https://supabase.com/dashboard/project/yboorfthtjsneebfhstm';

async function main() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    storageState: undefined // Will need to login
  });
  const page = await context.newPage();

  // Navigate to Supabase dashboard
  console.log('Navigating to Supabase dashboard...');
  await page.goto('https://supabase.com/dashboard/projects', { waitUntil: 'networkidle', timeout: 30000 });

  // Take screenshot to see current state
  await page.screenshot({ path: '/tmp/supabase_1_initial.png', fullPage: true });
  console.log('Screenshot saved: /tmp/supabase_1_initial.png');

  // Check if we need to login
  const url = page.url();
  console.log('Current URL:', url);

  if (url.includes('sign-in') || url.includes('auth')) {
    console.log('LOGIN REQUIRED — Please login manually in the browser window.');
    console.log('Waiting up to 120 seconds for login...');

    // Wait for redirect to dashboard after manual login
    try {
      await page.waitForURL('**/dashboard/**', { timeout: 120000 });
      console.log('Login successful! Redirected to:', page.url());
    } catch {
      console.log('Login timeout. Current URL:', page.url());
      await page.screenshot({ path: '/tmp/supabase_2_login_timeout.png', fullPage: true });
      await browser.close();
      return;
    }
  }

  // Navigate to specific project
  console.log('Navigating to project...');
  await page.goto(PROJECT_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.screenshot({ path: '/tmp/supabase_3_project.png', fullPage: true });
  console.log('Screenshot saved: /tmp/supabase_3_project.png');
  console.log('Current URL:', page.url());

  // Check for "paused" state
  const pageContent = await page.textContent('body');

  if (pageContent.includes('paused') || pageContent.includes('Paused') || pageContent.includes('Restore')) {
    console.log('PROJECT IS PAUSED — Looking for Restore button...');

    // Try to find and click Restore button
    const restoreBtn = page.locator('button:has-text("Restore")').first();
    if (await restoreBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      console.log('Found Restore button, clicking...');
      await restoreBtn.click();
      await page.waitForTimeout(3000);
      await page.screenshot({ path: '/tmp/supabase_4_after_restore.png', fullPage: true });
      console.log('Screenshot saved: /tmp/supabase_4_after_restore.png');

      // Check for confirmation dialog
      const confirmBtn = page.locator('button:has-text("Restore")').first();
      if (await confirmBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
        console.log('Confirming restore...');
        await confirmBtn.click();
        await page.waitForTimeout(5000);
        await page.screenshot({ path: '/tmp/supabase_5_restoring.png', fullPage: true });
        console.log('Restore initiated! Screenshot: /tmp/supabase_5_restoring.png');
      }
    } else {
      console.log('Could not find Restore button. Check screenshots.');
    }
  } else if (pageContent.includes('Table Editor') || pageContent.includes('SQL Editor') || pageContent.includes('API')) {
    console.log('PROJECT IS ACTIVE — No restore needed.');
  } else {
    console.log('Unknown state. Check screenshot at /tmp/supabase_3_project.png');
  }

  // Keep browser open for 30 seconds for manual inspection
  console.log('Browser will stay open for 30 seconds for inspection...');
  await page.waitForTimeout(30000);

  await browser.close();
  console.log('Done.');
}

main().catch(console.error);
