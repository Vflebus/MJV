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
        'desk': "url('/assets/imgs/desk.webp')",
        'fond': "url('/assets/imgs/fond.webp')",
      },
      boxShadow: {
        'paper': '0px 0px 5px 0px rgba(0,0,0,0.81)'
      },
      fontFamily: {
        batb: ["batb", "cursive"],
      }
    },
  },
  plugins: [],
}

