/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      active: {
        active: "#ff0000",
      },
      fontWeight: {
        fontbolder: "800",
      },
    },
  },
  plugins: [],
};
