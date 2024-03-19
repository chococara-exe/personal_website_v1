/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    letterSpacing: {
      title: '15px',
    },
    fontSize: {
      title: '100em',
    },
    extend: {
      colors: {
        'victoria-purple': '#3f418b',
        'haiti-blue': '#0b0f2a',
        'tapestry-pink': '#AD4D8D',
      },
      fontFamily: {
        'Montserrat': 'Montserrat'
      },
    },
  },
  plugins: [],
}

