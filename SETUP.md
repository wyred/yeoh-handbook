# GitHub Pages Setup Instructions

This documentation site is configured for GitHub Pages with Jekyll. Here's what you need to know:

## Automatic Deployment

The site is configured to automatically deploy when:
1. Changes are pushed to the `main` branch
2. Pull requests are merged to `main`

The GitHub Actions workflow (`.github/workflows/pages.yml`) handles the build and deployment process.

## Required GitHub Settings

To enable GitHub Pages for this repository:

1. Go to repository **Settings**
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select "GitHub Actions"
4. The site will be available at: `https://wyred.github.io/yeoh-handbook`

## File Structure

- `_config.yml` - Jekyll configuration
- `_layouts/` - HTML templates
- `_includes/` - Reusable HTML components
- `assets/` - CSS, images, and other static files
- `*.md` files - Content pages in Markdown

## Adding New Content

### New Pages
1. Create a new `.md` file
2. Add front matter at the top:
```yaml
---
layout: default
title: Your Page Title
---
```
3. Write content in Markdown below the front matter

### New Images
1. Add images to `assets/images/`
2. Reference in Markdown: `![Alt text](../assets/images/image-name.jpg)`

### Navigation Updates
Edit `_config.yml` and update the `nav_links` section to add new menu items.

## Local Development

If you want to test changes locally before pushing:

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# View at http://localhost:4000
```

## Troubleshooting

- Check GitHub Actions tab for build errors
- Ensure all Markdown files have proper front matter
- Verify image paths are correct
- YAML syntax in `_config.yml` must be valid