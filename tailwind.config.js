/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#04050a',
          secondary: '#080b14',
          tertiary: '#0d1220',
          card: '#0a0e1a',
        },
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          cyan: '#06b6d4',
          'blue-light': '#60a5fa',
          'purple-light': '#a78bfa',
          'cyan-light': '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Eurostile GEO', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Eurostile GEO', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'slide-up': 'slide-up 0.6s ease forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        'border-spin': 'border-spin 3s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,130,246,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(59,130,246,0.7)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'border-spin': {
          '0%': { '--border-angle': '0deg' },
          '100%': { '--border-angle': '360deg' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': `linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
