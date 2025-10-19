# 🚀 Portfolio Deployment Guide

This guide will walk you through deploying your Next.js portfolio website to various platforms.

## 📋 Pre-Deployment Checklist

### ✅ Project Preparation
- [x] Next.js project structure is correct
- [x] All components are properly organized
- [x] Dependencies are installed
- [x] Build script is configured
- [x] Environment variables are documented

### 🔧 Required Files
- [x] `package.json` with build scripts
- [x] `next.config.ts` configuration
- [x] `tsconfig.json` TypeScript config
- [x] `.env.local` for environment variables
- [x] `public/` folder with assets

## 🎯 Deployment Options

### Option 1: Vercel (Recommended) ⭐
**Best for**: Next.js projects, automatic deployments, custom domains
**Cost**: Free tier available, paid plans for advanced features

### Option 2: Netlify
**Best for**: Static sites, form handling, edge functions
**Cost**: Free tier available, paid plans for advanced features

### Option 3: GitHub Pages
**Best for**: Open source projects, simple static sites
**Cost**: Free for public repositories

### Option 4: AWS Amplify
**Best for**: Full-stack applications, AWS integration
**Cost**: Pay-as-you-go pricing

## 🚀 Method 1: Deploy to Vercel (Recommended)

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   cd /Users/abhaymac/projectsm/portfolio
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Create GitHub Repository**:
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it `portfolio` or `abhishek-portfolio`
   - Make it public or private (your choice)
   - Don't initialize with README (you already have files)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up for Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**:
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Next.js project

3. **Configure Environment Variables**:
   - In Vercel dashboard, go to your project
   - Go to Settings → Environment Variables
   - Add your EmailJS variables:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a URL like `https://your-project.vercel.app`

### Step 3: Custom Domain (Optional)

1. **Add Domain in Vercel**:
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain (e.g., `abhishek.dev`)

2. **Configure DNS**:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or A record pointing to Vercel's IP addresses

## 🌐 Method 2: Deploy to Netlify

### Step 1: Build Your Project

```bash
cd /Users/abhaymac/projectsm/portfolio
npm run build
```

### Step 2: Deploy to Netlify

1. **Sign up for Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **Deploy from Git**:
   - Click "New site from Git"
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

3. **Set Environment Variables**:
   - Go to Site settings → Environment variables
   - Add your EmailJS variables

## 📱 Method 3: Deploy to GitHub Pages

### Step 1: Configure Next.js for Static Export

1. **Update `next.config.ts`**:
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   export default nextConfig
   ```

2. **Update `package.json`**:
   ```json
   {
     "scripts": {
       "build": "next build",
       "export": "next export"
     }
   }
   ```

### Step 2: Deploy to GitHub Pages

1. **Create GitHub Actions Workflow**:
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

2. **Enable GitHub Pages**:
   - Go to repository settings
   - Scroll to "Pages" section
   - Select "GitHub Actions" as source

## 🔧 Environment Variables Setup

### For Production Deployment

You'll need to set these environment variables in your deployment platform:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Setting Up EmailJS for Production

1. **Complete EmailJS Setup**:
   - Follow the `EMAILJS_SETUP.md` guide
   - Set up your email service and template
   - Get your service ID, template ID, and public key

2. **Test Email Functionality**:
   - Deploy to staging environment first
   - Test the contact form
   - Verify emails are received

## 🎨 Post-Deployment Optimization

### 1. Performance Optimization

1. **Enable Compression**:
   - Vercel: Automatic
   - Netlify: Enable in build settings

2. **Optimize Images**:
   - Use Next.js Image component
   - Compress images before upload

3. **Enable Caching**:
   - Set appropriate cache headers
   - Use CDN for static assets

### 2. SEO Optimization

1. **Add Meta Tags**:
   ```typescript
   // app/layout.tsx
   export const metadata = {
     title: 'Abhishek Chaturvedi - Full Stack Developer',
     description: 'Experienced Full Stack Developer specializing in React, Node.js, and cloud technologies.',
     keywords: 'full stack developer, react, node.js, javascript, portfolio',
     openGraph: {
       title: 'Abhishek Chaturvedi - Full Stack Developer',
       description: 'Experienced Full Stack Developer specializing in React, Node.js, and cloud technologies.',
       images: ['/og-image.jpg'],
     },
   }
   ```

2. **Add Sitemap**:
   Create `app/sitemap.ts`:
   ```typescript
   export default function sitemap() {
     return [
       {
         url: 'https://yourdomain.com',
         lastModified: new Date(),
         changeFrequency: 'yearly',
         priority: 1,
       },
       // Add other pages
     ]
   }
   ```

### 3. Analytics Setup

1. **Google Analytics**:
   ```typescript
   // app/layout.tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
     `}
   </Script>
   ```

## 🧪 Testing Your Deployment

### 1. Functionality Tests

- [ ] Homepage loads correctly
- [ ] Navigation works on all pages
- [ ] Contact form submits successfully
- [ ] Resume download works
- [ ] WhatsApp button functions
- [ ] Particle animations work
- [ ] Mobile responsiveness

### 2. Performance Tests

- [ ] Page load speed (< 3 seconds)
- [ ] Lighthouse score (> 90)
- [ ] Mobile performance
- [ ] SEO score

### 3. Cross-Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check for TypeScript errors
   - Verify all imports are correct
   - Ensure environment variables are set

2. **Email Not Working**:
   - Verify EmailJS configuration
   - Check environment variables
   - Test with different email addresses

3. **Images Not Loading**:
   - Check file paths in public folder
   - Verify image optimization settings
   - Test with different image formats

4. **Styling Issues**:
   - Check CSS file paths
   - Verify Tailwind CSS configuration
   - Test responsive breakpoints

## 📊 Monitoring and Maintenance

### 1. Set Up Monitoring

- **Uptime Monitoring**: UptimeRobot, Pingdom
- **Error Tracking**: Sentry, LogRocket
- **Performance Monitoring**: Vercel Analytics, Google PageSpeed

### 2. Regular Maintenance

- **Update Dependencies**: Monthly security updates
- **Backup Data**: Regular backups of important files
- **Monitor Performance**: Weekly performance checks
- **Update Content**: Keep portfolio content current

## 🎉 Congratulations!

Once deployed, your portfolio will be live and accessible to potential employers and clients. Make sure to:

1. **Share Your Portfolio**: Add the URL to your resume, LinkedIn, and business cards
2. **Monitor Analytics**: Track visitor behavior and engagement
3. **Keep It Updated**: Regularly update projects and experience
4. **Test Regularly**: Ensure all functionality works correctly

## 📞 Support

If you encounter any issues during deployment:

1. Check the platform's documentation
2. Review error logs in the deployment dashboard
3. Test locally with `npm run build && npm run start`
4. Verify environment variables are correctly set

Your portfolio is now ready to showcase your skills to the world! 🌟
