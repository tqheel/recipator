# Recipator

A static site for presenting recipe walkthroughs, designed for GitHub Pages deployment. Each walkthrough is self-contained HTML with its own styling and theme.

## Features

- 🍳 Browse available recipe walkthroughs from a clean, modern interface
- 🎨 Each walkthrough preserves its own CSS styling and theme
- 📁 Support for both single-file (`.html`) and directory-based walkthroughs
- 🚀 Static site deployment - works on GitHub Pages
- 📱 Responsive design that works on desktop and mobile
- ⚡ Automatic deployment via GitHub Actions

## GitHub Pages Deployment

This site is designed to be deployed on GitHub Pages with automatic builds.

### Setup Instructions

1. **Enable GitHub Pages:**
   - Go to your repository's Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Add Walkthroughs:**
   - Add your walkthrough HTML files to the `walkthroughs/` directory
   - Commit and push to the `main` branch
   - The GitHub Action will automatically build and deploy

3. **Access Your Site:**
   - Visit `https://<username>.github.io/<repository>/`

## Local Development

To test the site locally:

1. Generate the walkthroughs list:
   ```bash
   npm run build
   ```

2. Serve the site with any static server, for example:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js http-server (npm install -g http-server)
   http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser to `http://localhost:8000`

## Adding Walkthroughs

Walkthroughs can be added in two formats:

### Single HTML File

Place a standalone HTML file in the `walkthroughs` directory:

```
walkthroughs/
  └── my-recipe.html
```

The file should be a complete HTML document with all styles included inline or in a `<style>` tag.

### Directory-Based Walkthrough

Create a directory with an `index.html` file:

```
walkthroughs/
  └── my-recipe/
      ├── index.html
      ├── styles.css (optional)
      └── images/ (optional)
```

This format allows you to organize related assets like CSS files, images, and other resources.

### After Adding Walkthroughs

1. Run the build script locally to test:
   ```bash
   npm run build
   ```

2. Commit and push your changes:
   ```bash
   git add walkthroughs/
   git commit -m "Add new recipe walkthrough"
   git push
   ```

3. GitHub Actions will automatically rebuild `walkthroughs.json` and deploy the updated site

## Examples

The repository includes two sample walkthroughs to demonstrate the functionality:

1. **Chocolate Chip Cookies** (`chocolate-chip-cookies.html`) - A warm, brown-themed single-file walkthrough
2. **Pasta Carbonara** (`pasta-carbonara/`) - An Italian-themed directory-based walkthrough with a dark, modern design

These examples show how each walkthrough can have its own unique visual theme and styling.

## Project Structure

```
recipator/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow for deployment
├── walkthroughs/             # Directory for walkthrough content
│   ├── chocolate-chip-cookies.html
│   └── pasta-carbonara/
│       └── index.html
├── index.html                # Main walkthrough selection page
├── walkthroughs.json         # Auto-generated list of walkthroughs
├── build.js                  # Build script to generate walkthroughs.json
├── package.json              # Project metadata and build script
└── README.md
```

## How It Works

1. **Walkthroughs Directory**: Contains all recipe walkthrough HTML files
2. **Build Script**: Scans the `walkthroughs/` directory and generates `walkthroughs.json`
3. **Main Page**: `index.html` reads `walkthroughs.json` and displays the list
4. **GitHub Actions**: Automatically runs the build script on every push to `main`
5. **GitHub Pages**: Serves the static site directly from the repository

## Requirements

- Node.js (for running the build script locally or in GitHub Actions)
- No runtime dependencies - pure static HTML/CSS/JS

## License

ISC
