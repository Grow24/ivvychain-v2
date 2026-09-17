/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-dark': '#2D2F30',
        'content-bg': '#E8EEF4',
        'venn-orange': '#FF8C42',
        'venn-blue': '#87CEEB',
        'venn-green': '#90EE90',
      },
      fontWeight: {
        thin: '500',
        extralight: '500',
        light: '600',
        normal: '600',
        medium: '600',
        semibold: '700',
        bold: '800',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
}

