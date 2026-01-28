/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kora: {
          blue: {
            bright: "#0092FF",
            dark: "#031455",
          },
          neutrals: {
            lightest: "#F0F3DB",
            blueGrey: "#E6EEF6",
            warmLight: "#EEE2E4",
          },
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
