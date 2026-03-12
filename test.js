const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('response', resp => {
    if (resp.url().includes('command-palette')) {
      console.log('URL:', resp.url(), 'STATUS:', resp.status(), 'MIME:', resp.headers()['content-type']);
    }
  });
  await page.goto('http://localhost:1313/aurora-docs/');
  await page.type('#cmdInput', 'color');
  await new Promise(r => setTimeout(r, 1000));
  const isVisible = await page.$eval('#cmdPanel', el => window.getComputedStyle(el).opacity);
  console.log('cmdPanel opacity:', isVisible);
  await browser.close();
})();
