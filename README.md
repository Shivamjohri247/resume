# Shivam Johri - Portfolio Website

A modern, high-performance portfolio website built with React, Vite, and GSAP, featuring smooth animations, accessibility compliance, and optimized performance.

## 🚀 Live Demo

[View Portfolio](https://shivamjohri.github.io/resume/)

## ✨ Features

### Design & UX
- **Sophisticated White Theme** - Clean white background with sky blue (#38bdf8) accents
- **Dark Hero Section** - Dramatic black hero with water shimmer video background
- **Glassmorphic Design** - Modern glass effects with backdrop blur throughout
- **Smooth Animations** - GSAP-powered animations with ScrollTrigger
- **Lenis Smooth Scroll** - Buttery smooth scrolling experience
- **Custom Cursor** - Interactive cursor with hover effects (desktop only)
- **Responsive Design** - Fully responsive across all devices

### Performance
- **Optimized Bundle Size** - 321.29 kB (gzipped: ~107 kB)
- **Code Splitting** - Separate vendor chunks for better caching
- **Lazy Loading** - Images load on-demand with IntersectionObserver
- **Tree Shaking** - Only used code included in bundle
- **Modern Build Target** - ES2020 for smaller, faster code

### Accessibility (WCAG 2.1 AA)
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - Proper ARIA labels and roles
- **Focus Management** - Visible focus indicators
- **Skip to Content** - Quick navigation to main content
- **Reduced Motion** - Respects user motion preferences
- **Color Contrast** - WCAG AA compliant contrast ratios

### Technical Stack
- **React 18.3** - Latest React with Concurrent Features
- **Vite 5.4** - Lightning-fast build tool
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **GSAP 3.13** - Professional-grade animations
- **Lenis 1.3** - Smooth scroll implementation

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Clone & Install

```bash
# Clone the repository
git clone https://github.com/shivamjohri/resume.git
cd resume

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`

## 📦 Build & Deploy

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment Options

**GitHub Pages:**
```bash
npm install -D gh-pages
npm run deploy
```

**Netlify:**
- Connect repository
- Build command: `npm run build`
- Publish directory: `dist`

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

For detailed deployment instructions, see [BUILD.md](./BUILD.md)

## 📁 Project Structure

```
resume/
├── public/
│   └── images/           # Static images and assets
├── src/
│   ├── components/       # React components
│   │   ├── About.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── ExperienceList.jsx
│   │   ├── ExperienceTicker.jsx
│   │   ├── Footer.jsx
│   │   ├── GlobalStyles.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Philosophy.jsx
│   │   ├── ScrambleText.jsx
│   │   ├── StickyExpertise.jsx
│   │   └── WallList.jsx
│   ├── utils/           # Utility functions
│   │   └── accessibility.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies
```

## 🎨 Components

### Hero Section
- Massive animated text reveal
- Character-by-character animation
- Scroll indicator
- Call-to-action button

### Experience Wall
- Horizontal scrolling list
- Hover-triggered image reveals
- Smooth clip-path animations
- Responsive layout

### Philosophy Section
- Text-heavy content with elegant typography
- Scroll-triggered animations
- Optimized reading experience

### Sticky Expertise
- Sticky positioning technique
- Dynamic content reveal
- Smooth scroll-based animations

### Navigation
- Fixed backdrop blur navbar
- Smooth scroll to sections
- Mobile hamburger menu
- Keyboard accessible

### Custom Cursor
- Smooth lag effect using requestAnimationFrame
- Hover state scaling
- Hidden on touch devices
- Disabled for reduced motion preference

## ⚡ Performance

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### Optimization Techniques
1. **Code Splitting** - Separate vendor chunks
2. **Lazy Loading** - Images load on viewport intersection
3. **Tree Shaking** - Remove unused code
4. **Minification** - Terser with console removal
5. **Asset Optimization** - Hashed filenames, compressed assets
6. **Font Optimization** - font-display: swap, preconnect

### Core Web Vitals
- LCP: < 2.5s (Largest Contentful Paint)
- FID: < 100ms (First Input Delay)
- CLS: < 0.1 (Cumulative Layout Shift)

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation
- Focus management
- Skip to content link
- Screen reader support
- Color contrast compliance
- Reduced motion support

### Testing
```bash
# Run accessibility audit
npm install -D @axe-core/react
npm run lint
```

## 🎯 Browser Support

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## 🔧 Configuration

### Vite Config
- React plugin with Fast Refresh
- Custom base path for GitHub Pages
- Terser minification
- Manual chunk splitting
- Modern ES2020 target

### Tailwind Config
- Custom color palette
- Font families (Inter, JetBrains Mono)
- Extended utilities
- Responsive breakpoints

### GSAP Setup
- Registered plugins: ScrollTrigger, useGSAP
- Lenis smooth scroll integration
- Proper cleanup in useEffect hooks

## 📝 Scripts

```bash
# Development
npm run dev          # Start dev server (localhost:3000)

# Building
npm run build        # Production build
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shivam Johri**
- Senior AI Engineer
- MLOps & Distributed Systems Specialist
- Email: shivamjohri247@gmail.com
- LinkedIn: [shivam-johri](https://linkedin.com/in/shivam-johri)
- GitHub: [@shivamjohri](https://github.com/shivamjohri)

## 🙏 Acknowledgments

- **GSAP** - Professional-grade animation library
- **Lenis** - Smooth scroll implementation
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## 📚 Resources

- [GSAP Documentation](https://gsap.com/docs/)
- [Lenis Documentation](https://github.com/studio-freight/lenis)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 📞 Contact

For questions, collaborations, or just to say hi:
- Email: shivamjohri247@gmail.com
- LinkedIn: [Connect](https://linkedin.com/in/shivam-johri)
- GitHub: [Follow](https://github.com/shivamjohri)

---

**Built with ❤️ using React, Vite, and GSAP**
