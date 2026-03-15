import fs from 'fs';
import path from 'path';

const dir = './content/data-visualisation/charts/';
const files = fs.readdirSync(dir).filter(f => f.startsWith('echarts-') && f.endsWith('.md'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Determine some tags based on the filename
  const tags = [];
  if (file.includes('bar')) tags.push('Bar');
  if (file.includes('line')) tags.push('Line');
  if (file.includes('pie') || file.includes('doughnut') || file.includes('circular')) tags.push('Pie');
  if (file.includes('graph') || file.includes('tree') || file.includes('sankey')) tags.push('Relational');
  if (file.includes('heatmap') || file.includes('calendar') || file.includes('candlestick') || file.includes('boxplot') || file.includes('parallel') || file.includes('themeriver')) tags.push('Advanced');
  if (tags.length === 0) tags.push('Other');

  // Add the image path
  const imageName = file.replace('.md', '.png');
  const imagePath = `/images/charts/${imageName}`;

  // Update frontmatter
  let newContent = content.replace(/menu:[\s\S]*?parent:\s*"components"/, `menu:\n  main:\n    parent: "dv-charts"`);
  
  // Insert tags and image into frontmatter
  // Frontmatter ends with ---
  const parts = newContent.split('---');
  if (parts.length >= 3) {
    let frontmatter = parts[1];
    
    // Add image
    if (!frontmatter.includes('image:')) {
      frontmatter += `image: "${imagePath}"\n`;
    }
    
    // Add tags
    if (!frontmatter.includes('tags:')) {
      const tagsStr = `["${tags.join('", "')}"]`;
      frontmatter += `tags: ${tagsStr}\n`;
    }
    
    parts[1] = frontmatter;
    newContent = parts.join('---');
  }

  fs.writeFileSync(filePath, newContent);
  console.log(`Updated frontmatter for ${file}`);
});
