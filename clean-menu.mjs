import fs from 'fs';
import path from 'path';

const dir = './content/data-visualisation/charts/';
const files = fs.readdirSync(dir).filter(f => f.startsWith('echarts-') && f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip out the menu block and its parent property
  content = content.replace(/menu:[\s\n]*main:[\s\n]*parent: "dv-charts"\n/g, '');

  fs.writeFileSync(filePath, content);
  console.log(`Cleaned menu frontmatter for ${file}`);
});
