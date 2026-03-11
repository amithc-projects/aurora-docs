const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content');

// The 4 groups
const GROUPS = {
    Overview: ['docs', 'philosophy.md', 'roadmap.md'],
    System: ['system', 'atoms', 'icons', 'typography', 'animations'],
    Components: ['components', 'forms', 'navigation', 'overlays'],
    Layouts: ['layouts', 'page-templates', 'sites', 'patterns', 'molecules']
};

function getGroupForPath(filePath) {
    const relPath = path.relative(contentDir, filePath);
    const parts = relPath.split(path.sep);
    const topLevel = parts[0];

    for (const [groupTitle, folders] of Object.entries(GROUPS)) {
        if (folders.includes(topLevel)) {
            return groupTitle;
        }
    }
    return 'Overview'; // Default fallback
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Only process files with frontmatter
    if (!content.startsWith('---\n')) return;

    const endOfFrontmatter = content.indexOf('---\n', 4);
    if (endOfFrontmatter === -1) return;

    const frontmatter = content.substring(0, endOfFrontmatter + 4);
    let newFrontmatter = frontmatter;

    const targetGroup = getGroupForPath(filePath);

    // If it has a menu: section, we need to ensure it's under main and has our parent
    if (newFrontmatter.includes('menu:')) {
        // Replace existing parent: "..." with our new parent
        if (/parent:\s*["'].*?["']/g.test(newFrontmatter)) {
            newFrontmatter = newFrontmatter.replace(/parent:\s*["'].*?["']/g, `parent: "${targetGroup}"`);
        } else {
            // If it specifies menu but no parent, we inject the parent
            // E.g. menu: "main" -> menu:\n  main:\n    parent: "Group"
            if (/menu:\s*["']main["']/g.test(newFrontmatter)) {
                newFrontmatter = newFrontmatter.replace(/menu:\s*["']main["']/g, `menu:\n  main:\n    parent: "${targetGroup}"`);
            } else if (/menu:\s*\n\s*main:/g.test(newFrontmatter)) {
                newFrontmatter = newFrontmatter.replace(/(menu:\s*\n\s*main:)/g, `$1\n    parent: "${targetGroup}"`);
            }
        }
    } else {
        // If it has NO menu section, add it right before the closing ---
        const menuStr = `menu:\n  main:\n    parent: "${targetGroup}"\n---`;
        newFrontmatter = newFrontmatter.replace(/---$/, menuStr);
    }

    // Update title for _index.md files if they are top-level items, we might not need to if we group them.
    // Wait, _index.md files create sections. If we group underneath them, it's fine.

    if (frontmatter !== newFrontmatter) {
        const newFileContent = newFrontmatter + content.substring(endOfFrontmatter + 4);
        fs.writeFileSync(filePath, newFileContent, 'utf8');
        console.log(`Updated frontmatter for ${filePath} -> ${targetGroup}`);
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
console.log('Finished updating frontmatter parents.');
