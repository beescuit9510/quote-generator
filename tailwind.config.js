/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        btn: ' -1px 5px 3px -3px rgba(0,0,0,0.55)',
      },
    },
  },
  plugins: [],
}
