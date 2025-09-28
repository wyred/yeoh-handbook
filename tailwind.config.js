/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './*.html',
    './*.md',
    './family-history/**/*.md',
    './traditions/**/*.md',
    './recipes/**/*.md',
    './photos/**/*.md',
    './assets/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}