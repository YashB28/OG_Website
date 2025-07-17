# Yash Bhushan - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Express.js, and PostgreSQL. Showcases professional experience, technical skills, projects, and photography work.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Portfolio+Preview)

## 🚀 Live Demo

**[View Live Portfolio](https://your-portfolio-url.com)**

## ✨ Features

- **Modern React 18** with TypeScript
- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme** - Automatic system preference detection
- **Interactive Contact Form** - PostgreSQL database integration
- **Photography Gallery** - High-quality image showcase
- **Smooth Animations** - Framer Motion powered
- **Professional UI** - shadcn/ui components
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Performance** - Vite build system
- **Type Safety** - Full TypeScript coverage

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Wouter** - Lightweight React router
- **TanStack Query** - Server state management
- **Framer Motion** - Smooth animations

### Backend
- **Express.js** - Web application framework
- **PostgreSQL** - Relational database
- **Drizzle ORM** - Type-safe database queries
- **Zod** - Runtime type validation

### Development
- **Vite** - Fast build tool and dev server
- **ESBuild** - Fast bundler for production
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first styling

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- PostgreSQL database (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YashB28/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your database credentials:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
   ```

4. **Set up database (optional)**
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   ```
   http://localhost:5000
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run preview` - Preview production build
- `npm run check` - Type checking
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open database studio

## 🏗 Project Structure

```
portfolio-website/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Photography.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── App.tsx         # Main app component
│   └── index.html          # HTML template
├── server/                 # Express.js backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Database operations
│   └── db.ts               # Database connection
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schemas
├── public/                 # Static assets
│   └── images/             # Profile and gallery images
└── Configuration files
```

## 🎨 Customization

### Personal Information
Update your details in these files:
- `client/src/components/Hero.tsx` - Name, title, social links
- `client/src/components/About.tsx` - Bio and personal info
- `client/src/components/Contact.tsx` - Contact information

### Content
- **Projects**: Edit `client/src/components/Projects.tsx`
- **Experience**: Modify `client/src/components/Experience.tsx`
- **Skills**: Update `client/src/components/Skills.tsx`
- **Photography**: Replace images in `public/images/`

### Styling
- **Colors**: Update `tailwind.config.ts`
- **Fonts**: Modify `client/src/index.css`
- **Components**: Customize in respective component files

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up environment variables
4. Configure redirects for SPA

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload `dist` folder to your hosting provider
3. Configure your web server to serve the files

### Environment Variables for Production
```env
DATABASE_URL=your_production_database_url
NODE_ENV=production
```

## 📊 Features Overview

### 🏠 Hero Section
- Professional profile image
- Dynamic introduction
- Call-to-action buttons
- Social media links

### 👤 About Section
- Personal background
- Professional journey
- Quick facts sidebar
- Skills overview

### 💼 Experience Section
- Work history timeline
- Company details
- Technology badges
- Achievement highlights

### 🛠 Skills Section
- Technical skills categorized
- Programming languages
- Tools and frameworks
- Soft skills

### 🚀 Projects Section
- Featured project showcase
- Technology stack indicators
- Live demo and GitHub links
- Detailed descriptions

### 📸 Photography Section
- High-quality image gallery
- Responsive grid layout
- Smooth hover effects
- Professional photography showcase

### 📮 Contact Section
- Working contact form
- Database integration
- Real-time validation
- Professional contact info

## 🔧 Configuration

### Database Setup
The application uses PostgreSQL with Drizzle ORM. Schema is defined in `shared/schema.ts`.

### Environment Variables
```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio

# Optional
NODE_ENV=development
PORT=5000
```

### Build Configuration
- **Vite**: Frontend build configuration in `vite.config.ts`
- **TypeScript**: Type checking configuration in `tsconfig.json`
- **Tailwind**: Styling configuration in `tailwind.config.ts`

## 🌟 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Fast Loading**: Vite-powered build system
- **Optimized Images**: Responsive image handling
- **Code Splitting**: Automatic code splitting
- **Tree Shaking**: Unused code elimination

## 📱 Mobile Responsive

- **Mobile-First Design**: Optimized for all screen sizes
- **Touch-Friendly**: Intuitive mobile navigation
- **Performance**: Fast loading on mobile devices
- **Accessibility**: Screen reader friendly

## 🔒 Security

- **Input Validation**: Zod schema validation
- **Type Safety**: Full TypeScript coverage
- **SQL Injection Protection**: Parameterized queries
- **XSS Prevention**: Sanitized inputs

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Yash Bhushan**
- Email: ybhushan2002@gmail.com
- LinkedIn: [yash-bhushan-3a43a3262](https://www.linkedin.com/in/yash-bhushan-3a43a3262)
- GitHub: [YashB28](https://github.com/YashB28)
- Portfolio: [your-portfolio-url.com](https://your-portfolio-url.com)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://react.dev/) for the powerful frontend library
- [Drizzle ORM](https://orm.drizzle.team/) for type-safe database operations

---

⭐ Star this repository if you found it helpful!