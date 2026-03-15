const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Capture all console logs
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));

  console.log('Navigating to page...');
  await page.goto('http://localhost:1313/aurora-docs/data-visualisation/showcases/complex-gantt/');
  
  console.log('Waiting for chart...');
  await page.waitForSelector('.aurora-complex-gantt', { timeout: 5000 });
  
  // Wait a bit for initialization loop
  await page.waitForTimeout(1000);
  
  console.log('Evaluating DOM...');
  const logs = await page.evaluate(() => {
    const group = document.querySelector('.gantt-row-group');
    if (!group) return 'Group not found';
    
    // Simulate click
    console.log('Dispatching click event on group...');
    group.click();
    
    const isHidden = group.nextElementSibling.style.display === 'none';
    return `Click dispatched. Next sibling hidden? ${isHidden}`;
  });
  
  console.log('Result:', logs);
  
  await browser.close();
})();
