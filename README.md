# Recipator

A Node.js application for presenting recipe walkthroughs. This app allows users to select and view recipe walkthroughs, with each walkthrough maintaining its own unique CSS and theme.

## Features

- 🍳 Browse available recipe walkthroughs from a clean, modern interface
- 🎨 Each walkthrough preserves its own CSS styling and theme
- 📁 Support for both single-file (`.html`) and directory-based walkthroughs
- 🚀 Simple Express.js server for easy deployment
- 📱 Responsive design that works on desktop and mobile

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/tqheel/recipator.git
   cd recipator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Select a walkthrough from the list to view it

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

## Examples

The repository includes two sample walkthroughs to demonstrate the functionality:

1. **Chocolate Chip Cookies** (`chocolate-chip-cookies.html`) - A warm, brown-themed single-file walkthrough
2. **Pasta Carbonara** (`pasta-carbonara/`) - An Italian-themed directory-based walkthrough with a dark, modern design

These examples show how each walkthrough can have its own unique visual theme and styling.

## Customization

### Port Configuration

By default, the server runs on port 3000. You can change this by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

### Styling the Main Page

The main selection page styling can be customized by editing `public/index.html`.

## Project Structure

```
recipator/
├── server.js              # Express server
├── package.json           # Node.js dependencies
├── public/
│   └── index.html        # Main walkthrough selection page
├── walkthroughs/         # Directory for walkthrough content
│   ├── chocolate-chip-cookies.html
│   └── pasta-carbonara/
│       └── index.html
└── README.md
```

## Requirements

- Node.js 14.x or higher
- npm or yarn

## License

ISC
