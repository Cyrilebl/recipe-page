/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Outfit"],
        title: ["Young Serif"],
      },
      colors: {
        primary: "hsla(24, 5%, 18%, 0.95)",

        title: "hsla(14, 45%, 36%, 0.95)",
        secondaryTitle: "hsla(332, 51%, 32%, 0.95)",

        bg: "hsl(30, 54%, 90%)",
        secondaryBg: "hsl(330, 100%, 98%)",
        grey: "hsl(30, 18%, 87%)",
      },
    },
  },
  plugins: [],
};
