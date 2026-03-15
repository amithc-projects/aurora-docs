import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const dir = './content/data-visualisation/charts/';
const files = fs.readdirSync(dir).filter(f => f.startsWith('echarts-') && f.endsWith('.md'));

// Using the port Hugo is currently running on
const baseUrl = 'http://localhost:1313/aurora-docs/data-visualisation/charts';
const outDir = './static/images/charts';

if (!fs.existsSync(outDir)){
    fs.mkdirSync(outDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });

  for (const file of files) {
    const slug = file.replace('.md', '');
    const url = `${baseUrl}/${slug}/`;
    
    console.log(`Visiting ${url}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // Wait for ECharts to render
      await new Promise(r => setTimeout(r, 1500)); 
      
      const chartElement = await page.$('.aurora-chart-container');
      
      if (chartElement) {
        // Capture Light Mode
        const lightPath = path.join(outDir, `${slug}-light.png`);
        await chartElement.screenshot({ path: lightPath });
        console.log(`Saved Light Mode: ${lightPath}`);

        // Toggle Dark Mode
        await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
        await page.evaluate(() => {
          document.documentElement.setAttribute('data-mode', 'dark');
          window.dispatchEvent(new Event('resize'));
        });
        
        // Wait for theme transition and ECharts redraw
        await new Promise(r => setTimeout(r, 1000));
        
        // RE-FETCH the element because the resize/theme change might detach the old handle
        const darkChartElement = await page.$('.aurora-chart-container');
        
        // Capture Dark Mode
        if (darkChartElement) {
          const darkPath = path.join(outDir, `${slug}-dark.png`);
          await darkChartElement.screenshot({ path: darkPath });
          console.log(`Saved Dark Mode: ${darkPath}`);
        } else {
             console.log(`Lost .aurora-chart-container on ${url} after dark mode toggle`);
        }
        
        // Reset to Light Mode for next
        await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);

      } else {
        console.log(`Could not find .aurora-chart-container on ${url}`);
      }
    } catch (e) {
      console.error(`Error processing ${file}:`, e.message);
    }
  }

  await browser.close();
  console.log('Finished generating thematic thumbnails!');
})();
