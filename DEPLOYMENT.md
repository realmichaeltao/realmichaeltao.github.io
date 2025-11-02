# Deployment Guide for realmichaeltao.github.io

## 🚀 Quick Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. **Repository name MUST be:** `realmichaeltao.github.io`
3. Make sure it's **public** (required for GitHub Pages)
4. **Do NOT** initialize with README, .gitignore, or license (we already have these)

### Step 2: Initialize Git and Push to GitHub

Open your terminal and run these commands:

```bash
cd /Users/michael/Desktop/个人网站/mtspace

# Initialize git repository (if not already initialized)
git init

# Add all files
git add .

# Commit the changes
git commit -m "Initial commit: Personal portfolio website"

# Add GitHub remote
git remote add origin https://github.com/realmichaeltao/realmichaeltao.github.io.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub: `https://github.com/realmichaeltao/realmichaeltao.github.io`
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save the settings

### Step 4: Wait for Deployment

- The GitHub Actions workflow will automatically run when you push to `main`
- Go to the **Actions** tab in your repository to see the deployment progress
- It usually takes 1-3 minutes to complete

### Step 5: View Your Website! 🎉

Your website will be live at: **https://realmichaeltao.github.io**

---

## 📝 Making Updates

After the initial deployment, whenever you want to update your website:

```bash
# Make your changes to the code
# Then:

git add .
git commit -m "Description of your changes"
git push
```

The website will automatically rebuild and redeploy!

---

## 🛠️ Local Development

To run the website locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To test the production build locally:

```bash
npm run build
npx serve out
```

---

## 📚 Tech Stack

- **Framework:** Next.js 14
- **Styling:** CSS with Custom Properties
- **Deployment:** GitHub Pages + GitHub Actions
- **Font:** Inter (Google Fonts)

---

## 🐛 Troubleshooting

### If the site doesn't load after deployment:

1. Check the Actions tab - make sure the workflow completed successfully
2. Go to Settings > Pages and verify:
   - Source is set to "GitHub Actions"
   - Custom domain is empty (unless you have one)
3. Wait a few minutes - DNS propagation can take time
4. Clear your browser cache and try again

### If you see 404 errors:

1. Make sure the repository name is exactly: `realmichaeltao.github.io`
2. Make sure the repository is public
3. Check that the `.nojekyll` file exists in the `out` folder after build

### If styles don't load:

1. Check the browser console for errors
2. Verify that `next.config.mjs` doesn't have unnecessary basePath or assetPrefix

---

## 📞 Need Help?

If you encounter any issues, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

Good luck with your deployment! 🚀

