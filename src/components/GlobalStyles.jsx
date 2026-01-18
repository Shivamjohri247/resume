import React from 'react';

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

    /* CSS Variables - Centralized Design System */
    :root {
      /* Background Colors */
      --color-background: #0a0a0a;
      --color-surface: #111111;

      /* Text Colors - High Contrast Hierarchy */
      --color-text-primary: #f5f5f5;
      --color-text-secondary: #a3a3a3;
      --color-text-muted: #525252;

      /* Accent Colors - Pure White for Interactions */
      --color-accent: #ffffff;
      --color-accent-hover: #e5e5e5;

      /* Border Colors */
      --color-border-subtle: rgba(255, 255, 255, 0.1);
      --color-border-default: rgba(255, 255, 255, 0.2);
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

    /* Typography */
    .font-sans {
      font-family: 'Inter', sans-serif;
    }
    .font-mono {
      font-family: 'JetBrains Mono', monospace;
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
