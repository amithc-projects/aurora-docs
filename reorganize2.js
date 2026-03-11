const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content');

const MAPPING = {
    // Overview
    'docs': 'overview',
    'philosophy.md': 'overview',
    'roadmap.md': 'overview',
    'system': 'overview',

    // Typography
    'typography': 'typography',

    // Components > Simple Content
    'components': 'components-simple',
    'overlays': 'components-simple',
    'icons': 'components-simple',
    'atoms': 'components-simple',
    'animations': 'components-simple',

    // Navigation > Site Navigation
    'navigation/mega-menu.md': 'nav-site',
    'navigation/side-nav.md': 'nav-site',
    'navigation/bottom-navigation.md': 'nav-site',
    'navigation/nav-rail.md': 'nav-site',
    'navigation/nav-main.md': 'nav-site',

    // Navigation > Page Navigation
    'navigation/tabs.md': 'nav-page',
    'navigation/stepper.md': 'nav-page',
    'navigation/breadcrumbs.md': 'nav-page',
    'navigation/pagination.md': 'nav-page',
    'navigation/flyout.md': 'nav-page',

    // Forms & Input > Standard controls
    'forms': 'forms-standard',

    // Page Layouts
    'sites': 'page-layouts',
    'page-templates': 'page-layouts',

    // Layout Components
    'patterns': 'components-patterns',
    'archetypes': 'archetypes',
    'molecules': 'components-molecules'
};

function getGroupForPath(filePath) {
    const relPath = path.relative(contentDir, filePath);
    const parts = relPath.split(path.sep);
    const topLevel = parts[0];

    // Check explicit file match e.g. 'navigation/tabs.md'
    if (MAPPING[relPath]) return MAPPING[relPath];
    // Check top level folder match
    if (MAPPING[topLevel]) return MAPPING[topLevel];

    return 'overview';
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.startsWith('---\n')) return;
    const endOfFrontmatter = content.indexOf('---\n', 4);
    if (endOfFrontmatter === -1) return;

    let frontmatter = content.substring(0, endOfFrontmatter + 4);
    const targetGroup = getGroupForPath(filePath);

    // Strip existing menu/parent configurations to ensure a clean slate
    frontmatter = frontmatter.replace(/menu:\s*\n(?:\s+main:\n(?:\s+parent:[^\n]+\n)?)?/g, '');
    frontmatter = frontmatter.replace(/menu:\s*["']?main["']?\s*\n/g, '');
    frontmatter = frontmatter.replace(/parent:\s*["'].*?["']\s*\n/g, '');

    // Re-inject the pristine configuration for normal leaves
    if (path.basename(filePath) !== '_index.md') {
        const menuStr = `menu:\n  main:\n    parent: "${targetGroup}"\n---\n`;
        frontmatter = frontmatter.replace(/---\n$/, menuStr);
    }

    const newFileContent = frontmatter + content.substring(endOfFrontmatter + 4);
    if (content !== newFileContent) {
        fs.writeFileSync(filePath, newFileContent, 'utf8');
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (filePath.endsWith('.md')) {
            processFile(filePath);
        }
    }
}

walkDir(contentDir);
console.log('Finished updating frontmatter parents into the 3-level tree.');
