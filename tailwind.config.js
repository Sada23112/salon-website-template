import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background, #f8f6f1)',
        foreground: 'var(--foreground, #1a1a1a)',
        accent: 'var(--accent, #d4a574)',
        'accent-light': 'var(--accent-light, #e8d4c0)',
        muted: 'var(--muted, #6b6b6b)',
      },
      fontFamily: {
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
