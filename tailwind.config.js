/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kora: {
          mint: "#10b981",
          purple: {
            light: "#8b5cf6",
            DEFAULT: "#6366f1",
            dark: "#4c1d95",
          },
          blue: {
            light: "#3b82f6",
            DEFAULT: "#1e3a8a",
            dark: "#0c1e54",
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
