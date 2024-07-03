/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "wooden-background": "url('wooden-background.png')",
      },
    },
  },
  plugins: [],
};
