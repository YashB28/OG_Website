# Yash Bhushan - Modern React Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Express.js. This is the **current running application** that showcases professional experience, skills, projects, and photography work.

## 🚀 Features

- **Modern React 18** with TypeScript
- **Responsive Design** with Tailwind CSS
- **Dark/Light Theme** toggle with system preference detection
- **Interactive Components** using shadcn/ui library
- **Smooth Animations** and transitions
- **Contact Form** with database integration
- **Photography Gallery** with high-quality images
- **PostgreSQL Database** for contact messages
- **Professional SEO** optimization

## 📁 Project Structure

```
current-react-portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Photography.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   └── index.html          # HTML template
├── server/                 # Express.js backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Database operations
│   ├── db.ts               # Database connection
│   └── vite.ts             # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schemas
├── attached_assets/        # Image assets
└── Configuration files
```

## 🛠 Technology Stack

### Frontend
- **React 18** - Modern React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Wouter** - Lightweight React router
- **TanStack Query** - Server state management
- **Vite** - Fast build tool and dev server

### Backend
- **Express.js** - Web application framework
- **TypeScript** - Type-safe server code
- **PostgreSQL** - Relational database
- **Drizzle ORM** - Type-safe database queries
- **Zod** - Runtime type validation

### Development Tools
- **ESBuild** - Fast bundler for production
- **PostCSS** - CSS processing
- **Drizzle Kit** - Database migrations
- **TSX** - TypeScript execution

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd current-react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
   ```

4. **Set up database**
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Push database schema changes

## 🎨 Key Components

### Navigation
- Sticky header with smooth scrolling
- Active section highlighting
- Mobile responsive menu
- Theme toggle button

### Hero Section
- Professional profile image
- Call-to-action buttons
- Social media links
- Animated elements

### About Section
- Personal introduction
- Quick facts sidebar
- Professional background

### Experience
- Work history timeline
- Company details
- Technology badges
- Descriptions of achievements

### Skills
- Categorized skill sets
- Technical competencies
- Soft skills
- Interactive badges

### Projects
- Featured project showcase
- Technology stack indicators
- GitHub and demo links
- Detailed descriptions

### Photography
- Gallery of personal work
- High-quality images
- Responsive grid layout
- Hover effects

### Contact
- Working contact form
- Database integration
- Personal contact information
- Resume download

## 🎯 Features in Detail

### Theme System
- Light/dark mode toggle
- System preference detection
- Smooth transitions
- Persistent storage

### Database Integration
- PostgreSQL for contact messages
- Type-safe queries with Drizzle ORM
- Schema validation with Zod
- Automatic migrations

### Performance
- Vite for fast development
- Optimized production builds
- Lazy loading where applicable
- Responsive image handling

### SEO & Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Screen reader friendly

## 🔧 Configuration

### Tailwind Configuration
Colors and theme customization in `tailwind.config.ts`

### Database Schema
Database models defined in `shared/schema.ts`

### API Routes
RESTful API endpoints in `server/routes.ts`

### Build Configuration
Vite configuration in `vite.config.ts`

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized for all screen sizes

## 🔄 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - Environment mode (development/production)

## 📧 Contact Integration

The contact form is fully functional with:
- Real-time validation
- Database storage
- Toast notifications
- Error handling

## 🎨 Customization

### Personal Information
Update personal details in:
- `client/src/components/Hero.tsx`
- `client/src/components/About.tsx`
- `client/src/components/Contact.tsx`

### Projects
Add/modify projects in:
- `client/src/components/Projects.tsx`

### Skills
Update skill categories in:
- `client/src/components/Skills.tsx`

### Experience
Update work history in:
- `client/src/components/Experience.tsx`

### Photography
Replace images in:
- `attached_assets/` directory
- Update imports in `client/src/components/Photography.tsx`

## 🚀 Performance Optimizations

- Tree shaking with Vite
- Code splitting
- Optimized images
- Minimal bundle size
- Fast refresh in development

## 📦 Dependencies

### Core Dependencies
- React 18 with concurrent features
- TypeScript for type safety
- Tailwind CSS for styling
- Express.js for backend
- PostgreSQL for database

### UI Components
- shadcn/ui component library
- Radix UI primitives
- Lucide React icons
- React Icons

### Development
- Vite for fast development
- ESBuild for production
- PostCSS for CSS processing
- Drizzle Kit for database

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Yash Bhushan**
- Email: ybhushan2002@gmail.com
- LinkedIn: [yash-bhushan-3a43a3262](https://www.linkedin.com/in/yash-bhushan-3a43a3262)
- GitHub: [YashB28](https://github.com/YashB28)

## 🤝 Contributing

This is a personal portfolio project. Feel free to use it as inspiration for your own portfolio!

---

**Note**: This is the complete source code for the currently running React portfolio application. It includes all components, styling, backend integration, and database functionality.