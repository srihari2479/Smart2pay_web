/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#042656',
          'navy-dark': '#021633',
          'navy-light': '#0A3A80',
          blue: '#1856F3',
          'blue-hover': '#0D45D6',
          'blue-subtle': '#EBF1FF',
          cyan: '#06B6D4',
        },
        accent: {
          gold: '#F59E0B',
          'gold-light': '#FEF3C7',
          emerald: '#10B981',
          'emerald-light': '#D1FAE5',
          rose: '#F43F5E',
          'rose-light': '#FFE4E6',
          purple: '#8B5CF6',
          'purple-light': '#EDE9FE',
        },
        base: '#EEF2F6',
        surface: '#F0F4F8',
        'surface-sunken': '#E5EBF2',
        card: '#F2F5F9',
        subtle: '#E2E8F0',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"IBM Plex Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
