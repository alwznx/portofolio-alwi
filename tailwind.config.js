/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // Set font default
      },
      colors: {
        primary: {
          400: '#60a5fa', // Biru muda
          500: '#3b82f6', // Biru utama
          600: '#2563eb', // Biru gelap
        },
        dark: '#0f172a',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
          'marquee-vertical': {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-50%)' },
      }
        }
      },
      animation: {
        'spin-slow': 'spin-slow 8s linear infinite', // yang tadi sudah ada
        'blink': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite', 
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'marquee-vertical': 'marquee-vertical 20s linear infinite',
      }
    },
  },
  plugins: [],
}