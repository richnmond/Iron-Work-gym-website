# IronWorks Gym - Premium Fitness Website

A modern, fully-featured gym management and membership website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

✅ **Responsive Design** - Mobile-first approach for all devices
✅ **Member Authentication** - Secure login/signup system with NextAuth
✅ **Class Scheduling** - Browse and book fitness classes
✅ **Payment Integration** - Stripe integration for membership payments
✅ **User Dashboard** - Track workouts, progress, and bookings
✅ **Blog System** - Powered by Sanity CMS
✅ **Contact Form** - Get in touch with the gym
✅ **Google Maps** - Location integration
✅ **SEO Optimized** - Proper metadata and structure

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React + React Icons
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **CMS**: Sanity
- **Maps**: Google Maps API
- **Forms**: React Hook Form

## Prerequisites

- Node.js 16+ and npm/yarn
- Stripe account
- Google Maps API key
- Sanity CMS project (optional)

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory and add your credentials:

```env
# Google Maps API
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here

# Stripe Payment
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_secret_key

# NextAuth
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000

# Database (if using)
DATABASE_URL=your_database_url

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes (payments, auth)
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── classes/           # Class schedule
│   ├── contact/           # Contact page
│   ├── dashboard/         # User dashboard
│   ├── login/             # Login/signup
│   ├── daily-routine/     # Daily routine guide
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── StripePayment.tsx
│   ├── Map.tsx
│   └── ...
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── styles/               # Global CSS

```

## Key Pages

- **Home** (`/`) - Landing page with hero, classes, pricing, testimonials
- **Classes** (`/classes`) - Class schedule and booking
- **About** (`/about`) - Gym info and trainer profiles
- **Blog** (`/blog`) - Articles from Sanity CMS
- **Contact** (`/contact`) - Contact form with map
- **Login** (`/login`) - Authentication
- **Dashboard** (`/dashboard`) - Member dashboard
- **Daily Routine** (`/daily-routine`) - Fitness tips

## Known Issues & Solutions

### Map Not Loading
- Ensure `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set in `.env.local`
- Verify API key is valid and Maps JavaScript API is enabled
- Falls back to basic info display if API key is missing

### Stripe Payment Issues
- Verify `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` are correct
- Check that the `/api/create-payment-intent` endpoint is accessible
- Use test keys for development

### Build/Runtime Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version is 16+

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type check
npm run type-check
```

## Future Enhancements

- [ ] Video tutorials and workout plans
- [ ] AI-powered workout recommendations
- [ ] Mobile app (React Native)
- [ ] Social features (friend list, challenges)
- [ ] Advanced analytics dashboard
- [ ] Integration with fitness tracking devices

## Support & Issues

For issues or questions, please create an issue in the repository or contact support.

## License

© 2024 IronWorks Gym. All rights reserved.
