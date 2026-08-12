/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#060709',
          900: '#090a0d',
          850: '#0e1117',
          800: '#141822',
          700: '#1e2433',
        },
        coir: {
          amber: '#d97706',
          gold: '#f59e0b',
          husk: '#854d0e',
          light: '#fbbf24',
        },
        bio: {
          green: '#10b981',
          emerald: '#059669',
          mint: '#34d399',
          glow: '#00ff9d',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['DM Mono', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
