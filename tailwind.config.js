/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["kanit", "sans-serif"],
      },
      fontWeight: {
        light:300,
        normal:400,
        medium:500,
        semibold:600,
        bold:700,
    },
  },
  plugins: [],
}
}
