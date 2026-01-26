/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark/Industrial Theme - Using CSS Variables for Consistency
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',

        // High Contrast Text Hierarchy - CSS Variables
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },

        // Accent Colors - CSS Variables
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',

        // Border Colors - CSS Variables
        border: {
          subtle: 'var(--color-border-subtle)',
          default: 'var(--color-border-default)',
        },
      },

      fontFamily: {
        sans: ['Silvana', 'sans-serif'],
        mono: ['Silvana', 'monospace'],
      },

      fontSize: {
        // Fluid Typography Scale - Responsive Scaling
        'massive': 'clamp(3rem, 12vw, 10rem)',
        'display': 'clamp(2rem, 6vw, 5rem)',
        'hero': 'clamp(1.5rem, 4vw, 3rem)',
      },

      spacing: {
        // Fluid Section Spacing - Responsive Vertical Rhythm
        'section': 'clamp(4rem, 15vh, 10rem)',
      },
    },
  },
  plugins: [],
}
