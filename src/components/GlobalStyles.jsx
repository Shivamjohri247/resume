import React from 'react';

const GlobalStyles = () => (
  <style>{`
    /* CSS Variables - Centralized Design System */
    :root {
      /* Background Colors - White Theme */
      --color-background: #ffffff;
      --color-surface: #f8f9fa;

      /* Text Colors - High Contrast Hierarchy */
      --color-text-primary: #0a0a0a;
      --color-text-secondary: #4a5568;
      --color-text-muted: #718096;

      /* Accent Colors - Sophisticated Sky Blue */
      --color-accent: #38bdf8;
      --color-accent-hover: #0ea5e9;

      /* Border Colors */
      --color-border-subtle: rgba(0, 0, 0, 0.08);
      --color-border-default: rgba(0, 0, 0, 0.15);
    }

    * {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background-color: var(--color-background);
      color: var(--color-text-primary);
      overflow-x: hidden;
      width: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
      padding: 0;
    }

    /* Custom Scrollbar - Dark Theme */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: var(--color-background);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--color-text-muted);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-text-secondary);
    }

    /* Typography - Inter for display, JetBrains Mono for code/tech */
    .font-sans {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-feature-settings: 'cv11' on, 'ss01' on;
    }
    .font-mono {
      font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
      font-feature-settings: 'ss01' on, 'zero' on, 'liga' on;
      font-variant-ligatures: contextual;
    }

    .overflow-hidden-y {
      overflow-y: hidden;
    }

    /* Image Reveal Mask */
    .image-reveal-container {
      position: relative;
      overflow: hidden;
    }
    .image-reveal-img {
      transform: scale(1.2);
    }

    /* Focus Visible Styles for Accessibility */
    :focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 2px;
    }

    /* Screen Reader Only Content */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    /* Visible on focus for accessibility */
    .sr-only-focusable:focus {
      position: static;
      width: auto;
      height: auto;
      padding: inherit;
      margin: inherit;
      overflow: visible;
      clip: auto;
      white-space: normal;
    }

    /* Skip to content link styling */
    .skip-link {
      position: absolute;
      top: -40px;
      left: 0;
      background: var(--color-accent);
      color: var(--color-background);
      padding: 8px 16px;
      text-decoration: none;
      z-index: 10000;
      font-weight: 600;
      transition: top 0.3s;
    }

    .skip-link:focus {
      top: 0;
    }

    /* Selection Styles */
    ::selection {
      background-color: var(--color-accent);
      color: var(--color-background);
    }

    /* Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  `}</style>
);

export default GlobalStyles;
