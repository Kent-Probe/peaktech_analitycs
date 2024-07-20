/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EA5600",
        secondary: "#201A23",
        background: "#FBFBFB",
        border: "#3C3C3B",
      },
    },
  },
  plugins: [],
};
