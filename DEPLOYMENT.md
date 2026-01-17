# 🚀 GitHub Pages Deployment Guide for SuntOK Website

This guide will help you deploy the SuntOK website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js installed (for local development)

---

## Step 1: Push Your Code to GitHub

If you haven't already, create a repository on GitHub and push your code:

```bash
# Navigate to the suntok-website folder
cd c:\Users\tudor\Documents\suntok-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - SuntOK website"

# Add your GitHub repository as remote (replace with your username)
git remote add origin https://github.com/YOUR_USERNAME/suntok-website.git

# Push to GitHub
git push -u origin main
```

---

## Step 2: Update Base URL (Important!)

The website is configured to deploy at `https://YOUR_USERNAME.github.io/suntok/`

If your repository name is different from `suntok`, update the base URL in `vite.config.ts`:

```typescript
base: mode === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

For example, if your repo is `suntok-website`:

```typescript
base: mode === 'production' ? '/suntok-website/' : '/',
```

---

## Step 3: Configure GitHub Pages

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/suntok-website`

2. Click on **Settings** (top menu, gear icon)

3. In the left sidebar, scroll down and click **Pages**

4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**

5. That's it! The workflow will automatically deploy when you push to main.

---

## Step 4: Trigger Deployment

The deployment will automatically trigger when you:
- Push changes to the `main` branch
- Manually trigger the workflow from the Actions tab

### Manual Trigger:
1. Go to your repository on GitHub
2. Click on **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow** → **Run workflow**

---

## Step 5: Access Your Website

After the workflow completes (usually 1-2 minutes), your website will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example: `https://YOUR_USERNAME.github.io/suntok-website/`

---

## Workflow File Location

The GitHub Actions workflow is located at:
```
.github/workflows/deploy.yml
```

---

## Troubleshooting

### Build Fails
- Make sure you have a `package-lock.json` file in the project
- Run `npm install` locally to generate it, then commit and push

```bash
npm install
git add package-lock.json
git commit -m "Add package-lock.json"
git push
```

### 404 Error After Deployment
- Make sure GitHub Pages is configured to use **GitHub Actions** as the source
- Check that the base URL in `vite.config.ts` matches your repository name
- Clear your browser cache or try incognito mode

### Workflow Not Triggering
- Make sure you're pushing to the `main` branch
- You can manually trigger from the Actions tab

### Blank Page After Deployment
- This is usually a base URL issue
- Make sure the `base` in `vite.config.ts` matches your repository name exactly

### Custom Domain (Optional)
If you want to use a custom domain like `www.suntok.app`:

1. Add a `CNAME` file in `public/` folder with your domain:
   ```
   www.suntok.app
   ```

2. Update `vite.config.ts` to use root base:
   ```typescript
   base: '/',
   ```

3. Configure DNS at your domain registrar to point to GitHub Pages:
   - For apex domain: Add `A` records pointing to GitHub's IPs
   - For www subdomain: Add `CNAME` record pointing to `YOUR_USERNAME.github.io`

4. In GitHub repo Settings → Pages, enter your custom domain

---

## Useful Commands

```bash
# Install dependencies
npm install

# Local development
npm run dev

# Build locally (to test production build)
npm run build

# Preview production build locally
npm run preview
```

---

## Summary

| Step | Action |
|------|--------|
| 1 | Push code to GitHub |
| 2 | Update base URL in vite.config.ts to match repo name |
| 3 | Enable GitHub Pages with GitHub Actions source |
| 4 | Push changes or manually trigger workflow |
| 5 | Access at `https://USERNAME.github.io/REPO_NAME/` |

---

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Vite Deployment Guide: https://vitejs.dev/guide/static-deploy.html#github-pages
- GitHub Actions Documentation: https://docs.github.com/en/actions

---

Happy deploying! 🎉
