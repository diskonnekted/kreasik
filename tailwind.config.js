/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
  ],
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
        terracotta: '#C67B5C',
        'sand-beige': '#D4C4A8',
        'warm-clay': '#B5651D',
        'soft-cream': '#F5F0E1',
      },
      fontFamily: {
        heading: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['48px', '1.1'],
        'heading-lg': ['36px', '1.2'],
        'heading-md': ['24px', '1.3'],
        'heading-sm': ['20px', '1.4'],
        'body-lg': ['18px', '1.6'],
        'body': ['16px', '1.5'],
        'body-sm': ['14px', '1.5'],
        'caption': ['12px', '1.4'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.06)',
        'glow': '0 0 20px rgba(225, 29, 72, 0.3)',
      },
    },
  },
  plugins: [],
}
