/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f97316",

          "secondary": "#fb923c",

          "accent": "#EEAF3A",

          "neutral": "#ea580c",

          "base-100": "#f3f4f6",

          "info": "#3ABFF8",

          "success": "#65a30d",

          "warning": "#FBBD23",

          "error": "#be123c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
