# Deploying Your Portfolio to Vercel

This guide will help you deploy your portfolio project to Vercel for free.

## Prerequisites

1. A GitHub account
2. Your portfolio project pushed to a GitHub repository
3. A Vercel account (you can sign up with your GitHub account)

## Deployment Steps

### 1. Push Your Code to GitHub

If you haven't already, create a repository on GitHub and push your code:

```bash
# If you haven't already initialized a Git repository
git init
git add .
git commit -m "Initial commit"

# Add your GitHub repository as a remote
git remote add origin https://github.com/yourusername/frontend-portfolio.git
git push -u origin main
```

### 2. Connect to Vercel

1. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account
2. Click "Add New" → "Project"
3. Select your portfolio repository from the list
4. Configure your project:
   - Framework Preset: Vite
   - Build Command: `npm run build` (this should be automatic)
   - Output Directory: `dist` (this should be automatic)

### 3. Add Environment Variables

1. In the Vercel project configuration, go to "Environment Variables"
2. Add the same environment variables from your `.env.local` file:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY

### 4. Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually less than a minute)
3. Once deployed, Vercel will provide you with a URL for your project

### 5. Configure Custom Domain (Optional)

If you have a custom domain:

1. Go to your project dashboard in Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain and follow the instructions to configure DNS

## Continuous Deployment

Vercel automatically sets up continuous deployment. Every time you push to your GitHub repository, Vercel will automatically rebuild and deploy your project.

### Preview Deployments

Vercel creates preview deployments for pull requests. This allows you to preview changes before merging them into your main branch.

## Setting Up Analytics (Optional)

Vercel offers built-in analytics:

1. Go to your project dashboard
2. Click "Analytics"
3. Follow the setup instructions

## Troubleshooting

- **Build Errors**: Check the build logs in Vercel for any errors
- **Environment Variables**: Make sure all required environment variables are set correctly
- **API Access**: Ensure your Supabase project's CORS settings allow access from your Vercel domain
- **Missing Content**: Check if your `.gitignore` is excluding necessary files

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Custom Domain Setup](https://vercel.com/docs/concepts/projects/domains)
