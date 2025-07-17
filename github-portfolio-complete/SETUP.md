# Setup Guide

Quick setup instructions for the portfolio website.

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- PostgreSQL database (optional)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YashB28/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your database URL:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio
   ```

4. **Database setup (optional)**
   ```bash
   npm run db:push
   ```

5. **Start development**
   ```bash
   npm run dev
   ```

6. **Open browser**
   ```
   http://localhost:5000
   ```

## Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run check` - Type checking
- `npm run db:push` - Database schema push

## Customization

1. **Personal Information**
   - Update `client/src/components/Hero.tsx`
   - Edit `client/src/components/About.tsx`
   - Modify `client/src/components/Contact.tsx`

2. **Projects**
   - Edit `client/src/components/Projects.tsx`
   - Update project data and links

3. **Experience**
   - Modify `client/src/components/Experience.tsx`
   - Update work history and skills

4. **Photography**
   - Replace images in `public/` directory
   - Update `client/src/components/Photography.tsx`

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Support

Check the main README.md for detailed information or open an issue for help.