const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from walkthroughs directory
app.use('/walkthroughs', express.static(path.join(__dirname, 'walkthroughs')));

// Route to get list of available walkthroughs
app.get('/api/walkthroughs', async (req, res) => {
  try {
    const walkthroughsDir = path.join(__dirname, 'walkthroughs');
    const files = await fs.readdir(walkthroughsDir);
    
    // Filter for HTML files and directories
    const walkthroughs = [];
    for (const file of files) {
      const filePath = path.join(walkthroughsDir, file);
      const stats = await fs.stat(filePath);
      
      if (stats.isDirectory()) {
        // Check if directory has an index.html
        try {
          await fs.access(path.join(filePath, 'index.html'));
          walkthroughs.push({
            name: file,
            type: 'directory',
            url: `/walkthroughs/${file}/index.html`
          });
        } catch (err) {
          // No index.html in directory
        }
      } else if (file.endsWith('.html')) {
        walkthroughs.push({
          name: file.replace('.html', ''),
          type: 'file',
          url: `/walkthroughs/${file}`
        });
      }
    }
    
    res.json(walkthroughs);
  } catch (error) {
    console.error('Error reading walkthroughs:', error);
    res.status(500).json({ error: 'Failed to read walkthroughs' });
  }
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Recipator server is running on http://localhost:${PORT}`);
});
