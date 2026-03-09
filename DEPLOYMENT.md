# Deployment Guide

This guide covers deploying the Rocket League CN Solution Hub to Vercel with automatic CI/CD.

## Quick Start

### 1. Push to GitHub

```bash
git add .
git commit -m "feat: initial VitePress site"
git push
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and login with GitHub
2. Click **"Add New Project"**
3. Select the `rlcn-solution-website` repository
4. Vercel will auto-detect VitePress configuration from `vercel.json`
5. Click **"Deploy"**
6. Site will be live at `https://rlcn-solution-website.vercel.app`

That's it! Vercel will automatically rebuild and deploy on every push to the `main` branch.

---

## Vercel Configuration

The `vercel.json` file at the project root configures the build:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".vitepress/dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### Configuration Details

| Setting | Value | Description |
|---------|-------|-------------|
| `buildCommand` | `npm run build` | Runs VitePress build |
| `outputDirectory` | `.vitepress/dist` | Where VitePress outputs the built site |
| `devCommand` | `npm run dev` | Local development server |
| `installCommand` | `npm install` | Install dependencies |

---

## Custom Domain (Optional)

To use a custom domain:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Domains**
3. Add your domain (e.g., `rlcn-solutions.com`)
4. Configure DNS records as instructed by Vercel
5. Wait for DNS propagation (up to 48 hours)

---

## Environment Variables

Currently, no environment variables are required.

If you need to add any in the future:

1. Go to Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add variables as needed
4. Redeploy for changes to take effect

---

## Giscus Comments Setup

The site uses Giscus for comments. To enable them:

### Step 1: Enable GitHub Discussions

1. Go to your repository on GitHub
2. Click **Settings** > **General**
3. Scroll to **Features** section
4. Check **Discussions** to enable it

### Step 2: Install Giscus App

1. Go to [github.com/apps/giscus](https://github.com/apps/giscus)
2. Click **Install**
3. Select your repository (`OwenXu5/rlcn-solution-website`)

### Step 3: Get Repository and Category IDs

1. Go to [giscus.app](https://giscus.app)
2. Enter your repository: `OwenXu5/rlcn-solution-website`
3. Select a category (e.g., **General**)
4. Copy the `repo` and `categoryid` values

### Step 4: Update Configuration

Edit `.vitepress/theme/index.ts`:

```typescript
comment: {
  repo: 'OwenXu5/rlcn-solution-website',  // Replace with actual repo
  repoId: 'YOUR_REPO_ID',                 // Replace with actual ID
  category: 'General',
  categoryId: 'YOUR_CATEGORY_ID'          // Replace with actual ID
}
```

### Step 5: Push Changes

```bash
git add .
git commit -m "feat: add Giscus comment configuration"
git push
```

Vercel will automatically redeploy with the new configuration.

---

## GitHub Actions (Alternative)

Vercel handles deployment automatically via its GitHub integration. However, if you prefer GitHub Actions for CI/CD, a workflow file is provided at `.github/workflows/deploy.yml`.

**Note**: For Vercel deployment, the GitHub Actions workflow is optional. Vercel's GitHub App handles automatic deployments on push.

---

## Build Locally

Before pushing, you can test the build locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Troubleshooting

### Build Fails on Vercel

1. Check the build logs in Vercel dashboard
2. Verify `package.json` has correct scripts
3. Ensure all dependencies are listed in `package.json`
4. Try building locally: `npm run build`

### Site Not Updating

1. Check if push succeeded to `main` branch
2. Verify Vercel deployment triggered (check Vercel dashboard)
3. Clear browser cache and hard refresh

### Giscus Comments Not Showing

1. Ensure GitHub Discussions is enabled
2. Verify Giscus app is installed
3. Check that `repo` and `categoryId` are correct in `.vitepress/theme/index.ts`
4. Wait a few minutes after pushing changes

---

## Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [VitePress Deployment Guide](https://vitepress.dev/guide/deploy)
- [Giscus Documentation](https://giscus.app)
- [Vercel GitHub App](https://github.com/apps/vercel)

---

**Repository**: [OwenXu5/rlcn-solution-website](https://github.com/OwenXu5/rlcn-solution-website)  
**Live Site**: `https://rlcn-solution-website.vercel.app` (after deployment)
