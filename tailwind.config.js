import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background, #111111)',
        foreground: 'var(--foreground, #F5E9E2)',
        accent: 'var(--accent, #D4A373)',
        'accent-secondary': 'var(--accent-secondary, #C97B63)',
        muted: 'var(--muted, #8B8B8B)',
        'dark-bg': 'var(--dark-bg, #1A1A1A)',
        'light-bg': 'var(--light-bg, #FAF8F4)',
      },
      fontFamily: {
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
