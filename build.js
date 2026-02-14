const fs = require('fs');
const path = require('path');

/**
 * Build script to generate walkthroughs.json for static GitHub Pages deployment
 * This script scans the walkthroughs directory and creates a JSON manifest
 */

const walkthroughsDir = path.join(__dirname, 'walkthroughs');
const outputFile = path.join(__dirname, 'walkthroughs.json');

async function buildWalkthroughsList() {
  try {
    const files = fs.readdirSync(walkthroughsDir);
    const walkthroughs = [];

    for (const file of files) {
      const filePath = path.join(walkthroughsDir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        // Check if directory has an index.html
        const indexPath = path.join(filePath, 'index.html');
        if (fs.existsSync(indexPath)) {
          walkthroughs.push({
            name: file,
            type: 'directory',
            url: `walkthroughs/${file}/index.html`
          });
        }
      } else if (file.endsWith('.html')) {
        walkthroughs.push({
          name: file.replace('.html', ''),
          type: 'file',
          url: `walkthroughs/${file}`
        });
      }
    }

    // Write the walkthroughs list to JSON file
    fs.writeFileSync(outputFile, JSON.stringify(walkthroughs, null, 2));
    console.log(`✓ Generated walkthroughs.json with ${walkthroughs.length} walkthrough(s)`);
    console.log('Walkthroughs:', walkthroughs.map(w => w.name).join(', '));
  } catch (error) {
    console.error('Error building walkthroughs list:', error);
    process.exit(1);
  }
}

buildWalkthroughsList();
