/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
        },
      },

      colors: {
        secondary: "#661CE7",
        primary: "#FF6433",
        black: "#1E1B1B",
        mint: "#00D289",
        steelgrey: "#E2E6E9",
      },
    },
  },
  plugins: [],
};
