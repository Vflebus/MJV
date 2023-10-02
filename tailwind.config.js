/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'carton-lourd': '#A97835',
        'carton-leger': '#C08F4F'
      },
      backgroundImage: {
        'desk': "url('/assets/imgs/desk.png')",
      }
    },
  },
  plugins: [],
}

