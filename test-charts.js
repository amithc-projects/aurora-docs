const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', err => console.log('ERROR:', err.toString()));
  
  await page.goto('http://localhost:1313/components/aurora-charts/', { waitUntil: 'networkidle0' });
  await page.waitForTimeout(2000); // 2 seconds to ensure ECharts parses and draws
  
  // Scrape the DOM
  const dom = await page.evaluate(() => {
    const el = document.querySelector('.aurora-chart-container');
    return el ? el.outerHTML : 'NOT FOUND';
  });
  console.log('DOM:\n', dom);
  
  await browser.close();
})();
