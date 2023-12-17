/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],

  theme: {
    extend: {
      boxShadow: {
        btn: ' -1px 5px 3px -3px rgba(0,0,0,0.55)',
      },
    },
  },
  plugins: [],
}
