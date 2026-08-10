/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium Black + Gold (Luxury/Premium Brand)
        primary: '#1C1917',
        'on-primary': '#FFFFFF',
        secondary: '#44403C',
        accent: '#A16207',
        background: '#FAFAF9',
        foreground: '#0C0A09',
        muted: '#E8E5E1',
        'muted-foreground': '#78716C',
        border: '#D6D3D1',
        destructive: '#DC2626',
        'on-destructive': '#FFFFFF',
        success: '#16A34A',
        'on-success': '#FFFFFF',
        warning: '#CA8A04',
        'on-warning': '#FFFFFF',
        info: '#2563EB',
        'on-info': '#FFFFFF',
        // Warm earth tones
        terracotta: '#C2704E',
        'warm-clay': '#8B5E3C',
        'sand': '#D4C4A8',
        'soft-cream': '#F5F0E8',
        charcoal: '#292524',
        stone: '#78716C',
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
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)',
        'glow': '0 0 20px rgba(161, 98, 7, 0.2)',
        'premium': '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.03)',
      },
    },
  },
  plugins: [],
}
