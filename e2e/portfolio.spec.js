import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const EMAILJS = 'https://api.emailjs.com/**';

// Safety net: no test may ever send a real email
test.beforeEach(async ({ page }) => {
  await page.route(EMAILJS, (route) => route.abort());
  await page.goto('/');
  // Web fonts arrive late and make every section a little taller; wait for
  // them so anchor links scroll to the final position
  await page.waitForFunction(() => document.fonts.status === 'loaded');
});

test.describe('Hero and navigation', () => {
  test('shows the name and job title', async ({ page }) => {
    await expect(page).toHaveTitle(/Bita Yeganeh/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('DEVELOPER');
    await expect(page.getByRole('img', { name: /Bita Yeganeh/ })).toBeVisible();
  });

  for (const [link, sectionId] of [
    ['About', 'about'],
    ['Skills', 'stack'],
    ['Projects', 'projects'],
    ['Experience', 'experience'],
  ]) {
    test(`"${link}" link scrolls to its section`, async ({ page }) => {
      await page.getByRole('navigation').getByRole('link', { name: link, exact: true }).click();
      await expect(page.locator(`section#${sectionId}`).first()).toBeInViewport();
    });
  }

  test('"Contact Me" link scrolls to the contact form', async ({ page }) => {
    await page.getByRole('link', { name: /Contact Me/ }).click();
    await expect(page.locator('section#contact').first()).toBeInViewport();
    await expect(page.getByPlaceholder('Your Name')).toBeVisible();
  });

  test('Resume/CV button opens a real PDF', async ({ page, request }) => {
    const cv = page.getByRole('link', { name: 'Resume/CV' });
    await expect(cv).toHaveAttribute('target', '_blank');
    const response = await request.get(await cv.getAttribute('href'));
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/pdf');
  });
});

test.describe('Content', () => {
  test('lists all eleven projects', async ({ page }) => {
    const titles = [
      'Cyber Security Finland',
      'HR Management System',
      'The Swap Cabinet',
      'ABC of Media',
      'Pancake Order System',
      'Cafe Website UI Design',
      'Business College Networking Site',
      'Tech News Website',
      'Django To-Do App',
      'Currency Converter',
      'StockFlow',
    ];
    for (const title of titles) {
      await expect(page.locator('#projects').getByText(title).first()).toBeAttached();
    }
    // The About stat must match the number of projects shown
    await expect(page.locator('#about').getByText('11', { exact: true })).toBeVisible();
  });

  test('every external link opens safely in a new tab', async ({ page }) => {
    const external = page.locator('a[href^="http"]');
    const count = await external.count();
    expect(count).toBeGreaterThan(5);
    for (let i = 0; i < count; i++) {
      const link = external.nth(i);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', /noopener/);
    }
  });

  test('every image has alt text', async ({ page }) => {
    const images = page.locator('img');
    for (let i = 0; i < (await images.count()); i++) {
      expect(await images.nth(i).getAttribute('alt')).toBeTruthy();
    }
  });

  test('hackathon demo video is served', async ({ page, request }) => {
    const demo = page.getByRole('link', { name: /Watch demo/ });
    await expect(demo).toHaveAttribute('target', '_blank');
    const response = await request.get(await demo.getAttribute('href'));
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('video/mp4');
  });

  test('all project images load', async ({ page, request }) => {
    const sources = await page.locator('#projects img').evaluateAll((imgs) =>
      imgs.map((img) => img.getAttribute('src'))
    );
    for (const src of sources) {
      expect((await request.get(src)).status(), src).toBe(200);
    }
  });
});

test.describe('Contact form', () => {
  const form = (page) => page.locator('#contact form');
  const fill = async (page, { company = '' } = {}) => {
    await page.getByPlaceholder('Your Name').fill('Recruiter Test');
    await page.getByPlaceholder('Your Email').fill('recruiter@example.com');
    await page.getByPlaceholder('Your Message').fill('Hello Bita!');
    if (company) await form(page).locator('#company').fill(company);
  };

  test('does not send when required fields are empty', async ({ page }) => {
    let sent = false;
    await page.route(EMAILJS, (route) => { sent = true; return route.abort(); });
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByPlaceholder('Your Name')).toHaveJSProperty('validity.valueMissing', true);
    expect(sent).toBe(false);
  });

  test('shows a success message and clears the form after sending', async ({ page }) => {
    await page.route(EMAILJS, (route) => route.fulfill({ status: 200, body: 'OK' }));
    await fill(page);
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByRole('status')).toContainText('Thanks! Your message has been sent');
    await expect(page.getByPlaceholder('Your Message')).toHaveValue('');
  });

  test('shows an error message when sending fails', async ({ page }) => {
    await page.route(EMAILJS, (route) => route.fulfill({ status: 500, body: 'Server error' }));
    await fill(page);
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByRole('status')).toContainText("couldn't be sent");
  });

  test('spam trap: bots that fill the hidden field send nothing', async ({ page }) => {
    let sent = false;
    await page.route(EMAILJS, (route) => { sent = true; return route.abort(); });
    await fill(page, { company: 'Spam Corp' });
    await page.getByRole('button', { name: 'Send Message' }).click();
    await expect(page.getByRole('status')).toContainText('Thanks!');
    expect(sent).toBe(false);
  });
});

test.describe('Responsive layout', () => {
  for (const [label, width, height] of [
    ['small phone', 320, 640],
    ['phone', 390, 844],
    ['tablet', 768, 1024],
    ['laptop', 1280, 800],
    ['large screen', 1920, 1080],
  ]) {
    test(`no sideways scrolling on ${label} (${width}px)`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('/');
      const overflow = await page.evaluate(() => {
        const box = document.querySelector('.app-container');
        return box.scrollWidth - box.clientWidth;
      });
      expect(overflow).toBeLessThanOrEqual(1);
    });
  }

  test('header links stay inside the screen on a small phone', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 });
    await page.goto('/');
    for (const link of await page.getByRole('navigation').getByRole('link').all()) {
      const box = await link.boundingBox();
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(320);
    }
  });
});

test.describe('Accessibility', () => {
  test('no serious or critical accessibility problems (axe)', async ({ page }) => {
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((v) => ['serious', 'critical'].includes(v.impact));
    const summary = serious.map((v) => `${v.impact}: ${v.id} (${v.nodes.length}) - ${v.help}`);
    expect(summary, summary.join('\n')).toEqual([]);
  });
});
