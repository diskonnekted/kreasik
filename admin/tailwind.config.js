/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E11D48',
        'on-primary': '#FFFFFF',
        secondary: '#FB7185',
        accent: '#2563EB',
        background: '#FFF1F2',
        foreground: '#881337',
        muted: '#F0ECF2',
        border: '#FECDD3',
        destructive: '#DC2626',
        success: '#16A34A',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['3rem', { lineHeight: '1.1', fontWeight: '700', fontFamily: 'var(--font-syne)' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.2', fontWeight: '600', fontFamily: 'var(--font-syne)' }],
        'heading-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '600', fontFamily: 'var(--font-syne)' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '500', fontFamily: 'var(--font-syne)' }],
        body: ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-xs': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
