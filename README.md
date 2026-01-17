# SuntOK Website

A modern, beautiful presentation website for the SuntOK - Daily Safety Check-in App.

## About SuntOK

SuntOK is a mobile app that helps you stay connected with your loved ones through simple daily check-ins. If you don't check in for 2 days, your emergency contact gets automatically notified via SMS.

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the website directory:
   ```bash
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Download.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## Features

- 🎨 Modern, clean design with orange/coral color scheme matching the app
- 📱 Fully responsive for all devices
- ⚡ Fast loading with Vite
- 🎯 SEO optimized
- 🔄 Smooth scroll animations
- 🌐 Multi-section layout (Hero, Features, How It Works, Testimonials, Download)

## Customization

- Update colors in `tailwind.config.js`
- Modify content in component files
- Add your own images to `public/` folder
- Update download links in `Download.tsx`

## License

© 2026 SuntOK. All rights reserved.
