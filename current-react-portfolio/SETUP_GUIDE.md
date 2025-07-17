# Setup Guide - React Portfolio

This guide will help you set up and run the React portfolio application locally.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
# Database Connection
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio

# Optional: For Replit deployment
REPLIT_DB_URL=your_replit_db_url
```

### 3. Database Setup
If you have PostgreSQL installed locally:
```bash
# Push schema to database
npm run db:push

# Or if you need to reset the database
npm run db:reset
```

### 4. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5000` to view the application.

## 📋 Prerequisites

### Required
- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
- **npm** - Comes with Node.js

### Optional (for full functionality)
- **PostgreSQL 12+** - For contact form database
- **Git** - For version control

## 🔧 Development Environment

### VS Code Extensions (Recommended)
- TypeScript and JavaScript
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint

### Browser Developer Tools
- React Developer Tools
- Redux DevTools (if using Redux)

## 🗄️ Database Options

### Option 1: PostgreSQL (Recommended)
1. Install PostgreSQL locally
2. Create a database: `createdb portfolio`
3. Set DATABASE_URL in .env
4. Run `npm run db:push`

### Option 2: Replit Database
1. Use Replit's built-in PostgreSQL
2. Set DATABASE_URL to Replit's connection string
3. Run `npm run db:push`

### Option 3: No Database (Limited functionality)
- Contact form will show toast notifications only
- No persistent storage of messages

## 🛠️ Configuration

### Tailwind CSS
Customize colors and theme in `tailwind.config.ts`:
```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        'custom-blue': '#your-color-here',
      },
    },
  },
}
```

### TypeScript
Type checking configuration in `tsconfig.json` - no changes needed for basic usage.

### Build Configuration
Vite configuration in `vite.config.ts` - handles aliases and build optimization.

## 📱 Mobile Development

### Testing on Mobile
1. Find your local IP address: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Start dev server: `npm run dev`
3. Access from mobile: `http://YOUR_IP:5000`

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔍 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

#### Database Connection Error
1. Check if PostgreSQL is running
2. Verify DATABASE_URL in .env
3. Ensure database exists
4. Check firewall settings

#### TypeScript Errors
```bash
# Clear TypeScript cache
npm run check
```

#### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Vite Cache Issues
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Performance Issues
- Check browser dev tools Network tab
- Optimize images in `attached_assets/`
- Consider lazy loading for large components

## 📦 Production Build

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

### Deployment Checklist
- [ ] Environment variables configured
- [ ] Database accessible from production
- [ ] Images optimized
- [ ] HTTPS enabled
- [ ] Domain configured

## 🔄 Git Workflow

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit"
```

### Feature Development
```bash
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

## 🎨 Customization Tips

### Adding New Components
1. Create in `client/src/components/`
2. Export from component file
3. Import in parent component
4. Add to navigation if needed

### Updating Content
- **Personal Info**: Update in individual components
- **Projects**: Modify `Projects.tsx` projects array
- **Skills**: Update `Skills.tsx` skillCategories
- **Experience**: Modify `Experience.tsx` experiences array

### Styling
- Use Tailwind classes for consistency
- Custom CSS in `index.css` for global styles
- Component-specific styles with CSS modules if needed

## 📚 Learning Resources

### React & TypeScript
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### Database
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🆘 Getting Help

### Development Issues
1. Check browser console for errors
2. Review server logs in terminal
3. Check database connection
4. Verify environment variables

### Component Issues
1. Check React Developer Tools
2. Verify props and state
3. Check console for warnings
4. Test in different browsers

### Database Issues
1. Check connection string
2. Verify database exists
3. Check table structure
4. Test with direct SQL queries

## 🚀 Next Steps

After setup:
1. Customize personal information
2. Add your projects
3. Update skills and experience
4. Replace photography images
5. Test contact form
6. Deploy to production

---

**Need help?** Check the main README.md for more detailed information about the project structure and features.