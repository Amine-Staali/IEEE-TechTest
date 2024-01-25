/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px 10px',
    },
    extend: {
      spacing: {
        '16p': '16.5%',
        '18p': '18%',
        '19p': '19%',
        '22p': '22%',
        '27p': '27%',
        '28p': '28%',
        '29p': '29%',
        '41p': '41.5%',
        '75p': '74.5%',
        '84p': '83.5%',
      },
    },
  },
  plugins: [],
}

