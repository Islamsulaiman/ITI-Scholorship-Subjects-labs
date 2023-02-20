/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./js/**/*.{js}","/.{html}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    container: {
      padding: {
        DEFAULT: '10rem',
        sm: '20rem',
        lg: '40rem',
        xl: '50rem',
        '2xl': '60rem',
      },
    },
  },
};