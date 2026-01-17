# 🚀 GitHub Pages Deployment Guide for SuntOK Website

This guide will help you deploy the SuntOK website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- The SuntOK repository pushed to GitHub

---

## Step 1: Push Your Code to GitHub

If you haven't already, create a repository on GitHub and push your code:

```bash
# Navigate to the suntok folder
cd c:\Users\tudor\Documents\suntok

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - SuntOK app and website"

# Add your GitHub repository as remote (replace with your username)
git remote add origin https://github.com/YOUR_USERNAME/suntok.git

# Push to GitHub
git push -u origin master
```

---

## Step 2: Configure GitHub Pages

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/suntok`

2. Click on **Settings** (top menu)

3. In the left sidebar, click **Pages**

4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**

5. That's it! The workflow will automatically deploy when you push to main.

---

## Step 3: Update Base URL (Important!)

The website is configured to deploy at `https://YOUR_USERNAME.github.io/suntok/`

If your repository name is different from `suntok`, update the base URL in `website/vite.config.ts`:

```typescript
base: mode === 'production' ? '/YOUR_REPO_NAME/' : '/',
```

---

## Step 4: Trigger Deployment

The deployment will automatically trigger when you:
- Push changes to the `master` branch that affect files in the `website/` folder
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
https://YOUR_USERNAME.github.io/suntok/
```

---

## Workflow File Location

The GitHub Actions workflow is located at:
```
.github/workflows/deploy-website.yml
```

---

## Troubleshooting

### Build Fails
- Make sure you have a `package-lock.json` file in the website folder
- Run `npm install` locally to generate it, then commit and push

```bash
cd website
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
- Make sure you're pushing to the `master` branch
- Check that changes are in the `website/` folder
- You can manually trigger from the Actions tab

### Custom Domain (Optional)
If you want to use a custom domain like `www.suntok.app`:

1. Add a `CNAME` file in `website/public/` with your domain:
   ```
   www.suntok.app
   ```

2. Update `vite.config.ts` to use root base:
   ```typescript
   base: '/',
   ```

3. Configure DNS at your domain registrar to point to GitHub Pages

---

## Environment Variables

If you need environment variables for production, create a `.env.production` file in the `website/` folder:

```env
VITE_API_URL=https://your-api.com
```

⚠️ **Never commit sensitive data!** Add `.env.production` to `.gitignore` if it contains secrets.

---

## Useful Commands

```bash
# Local development
cd website
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
| 2 | Enable GitHub Pages with GitHub Actions source |
| 3 | Update base URL if repo name differs |
| 4 | Push changes or manually trigger workflow |
| 5 | Access at `https://USERNAME.github.io/suntok/` |

---

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Vite Deployment Guide: https://vitejs.dev/guide/static-deploy.html#github-pages
- GitHub Actions Documentation: https://docs.github.com/en/actions

---

Happy deploying! 🎉
