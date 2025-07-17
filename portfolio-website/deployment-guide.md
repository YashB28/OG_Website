# Deployment Guide

## Quick Deploy Options

### Option 1: GitHub Pages (Recommended - Free)

1. **Create GitHub Repository**
   - Go to github.com and create a new repository
   - Name it `your-username.github.io` for your main site
   - Or any name like `portfolio` for a project site
   - Set to Public

2. **Upload Files**
   - Upload all files from the portfolio-website folder
   - Make sure index.html is in the root directory
   - Commit changes

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Save

4. **Access Your Site**
   - Main site: `https://your-username.github.io`
   - Project site: `https://your-username.github.io/repository-name`

### Option 2: Netlify (Free)

1. **Go to Netlify**
   - Visit netlify.com
   - Sign up with GitHub (recommended)

2. **Deploy**
   - Drag and drop the portfolio-website folder
   - Or connect to GitHub repository
   - Site will be live instantly

3. **Custom Domain** (Optional)
   - Add custom domain in site settings
   - Configure DNS records

### Option 3: Vercel (Free)

1. **Go to Vercel**
   - Visit vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Import from GitHub or upload folder
   - Framework: Other
   - Deploy

3. **Live Site**
   - Get instant .vercel.app domain
   - Add custom domain if needed

### Option 4: Simple Web Host

1. **Choose a Host**
   - Any web hosting service (GoDaddy, Bluehost, etc.)
   - Or free hosts like 000webhost, InfinityFree

2. **Upload Files**
   - Upload all files via FTP or file manager
   - Make sure index.html is in public_html or www folder

3. **Configure Domain**
   - Point domain to hosting server
   - Site will be live once DNS propagates

## File Structure

```
portfolio-website/
├── index.html          # Main portfolio page
├── styles.css          # Additional custom styles
├── script.js           # Interactive functionality
├── README.md           # Documentation
└── deployment-guide.md # This file
```

## Customization

### Update Personal Information
- Open index.html
- Find and replace contact details
- Update social media links
- Modify about section content

### Add Your Own Images
- Replace placeholder images with your photos
- Update image paths in HTML
- Optimize images for web (compress, resize)

### Color Scheme
- Modify gradient colors in CSS
- Update brand colors throughout
- Change accent colors for buttons and links

### Content Updates
- Update experience section with your work history
- Modify skills based on your expertise
- Add your actual projects with links
- Update education information

## Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images before uploading
   - Use appropriate dimensions

2. **Minimize Code**
   - Remove unused CSS
   - Compress JavaScript if needed
   - Use CDN for external libraries

3. **SEO Optimization**
   - Update meta tags
   - Add structured data
   - Use semantic HTML

## Domain Setup

### Custom Domain with GitHub Pages
1. Buy domain from registrar (Namecheap, GoDaddy, etc.)
2. Add CNAME file to repository with your domain
3. Configure DNS:
   - A record: 185.199.108.153
   - A record: 185.199.109.153
   - A record: 185.199.110.153
   - A record: 185.199.111.153
   - CNAME: your-username.github.io

### Custom Domain with Netlify
1. Add custom domain in Netlify dashboard
2. Configure DNS records as shown
3. Enable HTTPS (automatic)

## Troubleshooting

### Common Issues
- **404 Error**: Check file paths and names
- **Images Not Loading**: Verify image paths are correct
- **CSS Not Working**: Check CSS file path in HTML
- **JavaScript Errors**: Open browser console for details

### Browser Compatibility
- Modern browsers: Chrome, Firefox, Safari, Edge
- Mobile browsers: iOS Safari, Android Chrome
- Fallbacks included for older browsers

## Maintenance

### Regular Updates
- Keep content current
- Update work experience
- Add new projects
- Refresh contact information

### Security
- Use HTTPS (enabled by default on most platforms)
- Keep dependencies updated
- Monitor for broken links

### Analytics
- Add Google Analytics code
- Monitor site performance
- Track visitor engagement

## Support

If you need help with deployment:
1. Check platform documentation
2. Search community forums
3. Contact platform support
4. Review troubleshooting guides

Your portfolio is now ready for deployment! Choose the option that best fits your needs and technical comfort level.