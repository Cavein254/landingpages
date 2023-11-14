/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blogbg: "url('/src/assets/backpic.png')",
      },
    },
  },
  plugins: [],
};
