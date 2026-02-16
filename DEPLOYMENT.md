# Deployment Guide

This document provides instructions for deploying your portfolio website to various platforms.

## Prerequisites

Before deploying, make sure:
- All dependencies are installed: `npm install`
- The project builds successfully: `npm run build`
- All changes are committed to git

## GitHub Pages

### Option 1: Using gh-pages package

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

3. Add homepage field to `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name"
```

4. Deploy:
```bash
npm run deploy
```

### Option 2: Manual deployment

1. Build the project:
```bash
npm run build
```

2. Push the build folder to gh-pages branch:
```bash
git subtree push --prefix build origin gh-pages
```

3. Enable GitHub Pages in repository settings (Settings → Pages → Source: gh-pages branch)

## Vercel (Recommended - Easiest)

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "New Project" and import your repository

4. Vercel will auto-detect React and configure:
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

5. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

## Netlify

1. Push your code to GitHub

2. Go to [netlify.com](https://netlify.com) and sign in

3. Click "Add new site" → "Import an existing project"

4. Connect to GitHub and select your repository

5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

6. Click "Deploy site"

## Render

1. Push your code to GitHub

2. Go to [render.com](https://render.com) and sign in

3. Click "New +" → "Static Site"

4. Connect your GitHub repository

5. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `build`

6. Click "Create Static Site"

## Custom Domain

After deploying to any platform:

1. Purchase a domain from a registrar (Namecheap, GoDaddy, Google Domains, etc.)

2. Add custom domain in your hosting platform:
   - **Vercel**: Settings → Domains → Add
   - **Netlify**: Site settings → Domain management → Add custom domain
   - **GitHub Pages**: Repository Settings → Pages → Custom domain

3. Update DNS records at your domain registrar:
   - For Vercel: Add A and CNAME records provided by Vercel
   - For Netlify: Add CNAME record pointing to your Netlify subdomain
   - For GitHub Pages: Add CNAME record pointing to `yourusername.github.io`

## Environment Variables

If you need environment variables:

1. Create `.env` file locally (already in `.gitignore`)
2. Add variables with `REACT_APP_` prefix:
```
REACT_APP_API_KEY=your_key_here
```

3. Add the same variables in your hosting platform:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site settings → Environment variables
   - **Render**: Environment → Environment Variables

## Troubleshooting

### Build fails on deployment

- Check Node.js version compatibility
- Ensure all dependencies are in `package.json`, not just installed locally
- Check build logs for specific errors

### Blank page after deployment

- Check browser console for errors
- Verify `homepage` field in `package.json` matches your deployment URL
- Clear browser cache and hard reload (Cmd/Ctrl + Shift + R)

### Images not loading

- Use relative paths: `./images/photo.jpg` not `/images/photo.jpg`
- Ensure images are in `public/` or imported in components
- Check image file names match exactly (case-sensitive)

## Continuous Deployment

All mentioned platforms support automatic deployments:

1. Push changes to your GitHub repository
2. Platform automatically detects changes
3. Rebuilds and redeploys your site

No manual deployment needed after initial setup!

## Performance Tips

- Images are already optimized for web
- Framer Motion animations are performance-optimized
- Consider adding lazy loading for images if you add more
- Use Lighthouse in Chrome DevTools to check performance scores

## Security Notes

- Never commit `.env` files with sensitive data
- Keep dependencies updated: `npm audit fix`
- The current vulnerabilities are in dev dependencies and don't affect production
