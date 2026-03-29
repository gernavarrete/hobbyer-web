import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'surface-container-lowest': '#080c14',
        'surface-container-low': '#101622',
        'surface-container': '#1b212d',
        'surface-container-high': '#252b3b',
        'surface-container-highest': '#2d3446',
        'background': '#101622',
        'surface': '#101622',
        'primary': '#0d59f2',
        'primary-container': '#0d59f2',
        'on-primary': '#ffffff',
        'on-background': '#f1f5f9',
        'on-surface': '#f5f6f8',
        'on-secondary': '#94a3b8',
        'on-secondary-container': '#f1f5f9',
        'on-surface-variant': '#94a3b8',
        'outline': '#334155',
        'outline-variant': '#1e293b',
        'tertiary': '#fbbf24',
        'error': '#ef4444',
        'inverse-surface': '#f5f6f8',
        'inverse-on-surface': '#101622',
        'inverse-primary': '#4c84ff',
        'electric-cobalt': '#0d59f2',
        'brand-orange': '#FF6B00',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        headline: ['Plus Jakarta Sans'],
        body: ['Plus Jakarta Sans'],
        label: ['Plus Jakarta Sans'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      boxShadow: {
        'cobalt-glow': '0 0 40px rgba(13,89,242,0.3)',
        'orange-glow': '0 0 40px rgba(255,107,0,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
