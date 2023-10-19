/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c0c0d',

        bgPrimary: '#effaf6',

        prioHigh: '#b52016',
        prioMedium: '#998718',
        prioLow: '#348c3f',
      },
    },
  },
  plugins: [],
}

