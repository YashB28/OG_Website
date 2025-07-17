# Deployment Guide

This guide covers multiple deployment options for your React portfolio website.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)
**Best for:** React applications with serverless functions

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect via GitHub
# 1. Push to GitHub
# 2. Connect repository at vercel.com
# 3. Deploy automatically
```

**Environment Variables:**
```env
DATABASE_URL=your_production_database_url
NODE_ENV=production
```

### 2. Netlify
**Best for:** Static sites with serverless functions

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist/public
```

**Or via GitHub:**
1. Push to GitHub
2. Connect repository at netlify.com
3. Set build command: `npm run build`
4. Set publish directory: `dist/public`

### 3. Heroku
**Best for:** Full-stack applications

```bash
# Install Heroku CLI
# Create Heroku app
heroku create your-portfolio-name

# Add PostgreSQL addon
heroku addons:create heroku-postgresql:hobby-dev

# Deploy
git push heroku main
```

### 4. Railway
**Best for:** Full-stack with database

1. Connect GitHub repository at railway.app
2. Add PostgreSQL database
3. Set environment variables
4. Deploy automatically

## 🔧 Configuration Files

### Vercel (`vercel.json`)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/public/$1"
    }
  ]
}
```

### Netlify (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "dist/public"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Heroku (`Procfile`)
```
web: npm run start
```

## 🗄️ Database Setup

### PostgreSQL Options

#### 1. Neon (Recommended)
```bash
# Visit neon.tech
# Create database
# Get connection string
# Add to environment variables
```

#### 2. Supabase
```bash
# Visit supabase.com
# Create project
# Get connection string
# Add to environment variables
```

#### 3. Railway PostgreSQL
```bash
# Add PostgreSQL plugin in Railway
# Get connection string from dashboard
# Add to environment variables
```

#### 4. Heroku PostgreSQL
```bash
# Add PostgreSQL addon
heroku addons:create heroku-postgresql:hobby-dev

# Get connection string
heroku config:get DATABASE_URL
```

## 🔑 Environment Variables

### Required Variables
```env
DATABASE_URL=postgresql://username:password@host:port/database
NODE_ENV=production
```

### Optional Variables
```env
PORT=5000
POSTGRES_URL=your_database_url
POSTGRES_PRISMA_URL=your_database_url
POSTGRES_URL_NON_POOLING=your_database_url
```

## 🛠️ Pre-Deployment Checklist

- [ ] **Build passes locally**: `npm run build`
- [ ] **Database connection works**: Test with production URL
- [ ] **Environment variables set**: All required variables configured
- [ ] **Assets optimized**: Images compressed and optimized
- [ ] **Contact form tested**: Verify form submission works
- [ ] **Performance tested**: Check Lighthouse scores
- [ ] **Mobile responsive**: Test on various devices
- [ ] **SEO optimized**: Meta tags and descriptions updated

## 📊 Performance Optimization

### Before Deployment
```bash
# Optimize images
# Use tools like TinyPNG or ImageOptim

# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist/public

# Test performance
npm run preview
# Run Lighthouse test
```

### After Deployment
- Enable gzip compression
- Set up CDN for static assets
- Configure caching headers
- Monitor Core Web Vitals

## 🔒 Security Considerations

### Production Security
- Use HTTPS (automatic on most platforms)
- Set secure environment variables
- Enable CORS properly
- Validate all inputs
- Use parameterized queries

### Database Security
- Use connection pooling
- Enable SSL connections
- Regular backups
- Monitor for suspicious activity

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

#### Database Connection
```bash
# Test connection string
node -e "console.log(process.env.DATABASE_URL)"

# Check database accessibility
npm run db:push
```

#### Static Asset Loading
```bash
# Verify asset paths
# Check vite.config.ts aliases
# Ensure public folder is properly configured
```

#### API Routes Not Working
```bash
# Check server configuration
# Verify route definitions
# Test API endpoints locally
```

## 📈 Monitoring

### Recommended Tools
- **Vercel Analytics** - Performance monitoring
- **Sentry** - Error tracking
- **LogRocket** - User session recording
- **Google Analytics** - Traffic analysis

### Health Checks
```bash
# Test API endpoints
curl https://your-domain.com/api/health

# Monitor database performance
# Check server logs
# Monitor response times
```

## 🔄 Continuous Deployment

### GitHub Actions
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run test
      - name: Deploy to Vercel
        run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## 🌐 Custom Domain

### Domain Setup
1. Purchase domain from registrar
2. Add custom domain in hosting platform
3. Configure DNS records
4. Enable SSL certificate
5. Set up redirects (www to non-www)

### DNS Configuration
```
A record: @ → your-server-ip
CNAME: www → your-domain.com
```

## 📱 Mobile Optimization

### Progressive Web App (PWA)
```bash
# Add PWA capabilities
npm install vite-plugin-pwa
# Configure in vite.config.ts
# Add manifest.json
# Implement service worker
```

### Performance Tips
- Lazy load images
- Use responsive images
- Minimize bundle size
- Enable caching
- Optimize fonts

## 🎯 SEO Optimization

### Meta Tags
```html
<meta name="description" content="Your portfolio description">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your portfolio description">
<meta property="og:image" content="https://your-domain.com/og-image.jpg">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Software Engineer",
  "url": "https://your-domain.com"
}
```

## 📊 Analytics Setup

### Google Analytics
```html
<!-- Add to client/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🆘 Support

### Getting Help
1. Check deployment platform documentation
2. Review error logs
3. Test locally first
4. Check environment variables
5. Verify database connection

### Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Heroku Documentation](https://devcenter.heroku.com)
- [Railway Documentation](https://docs.railway.app)

---

Choose the deployment platform that best fits your needs and follow the specific instructions above. All platforms support the full-stack application with database integration.