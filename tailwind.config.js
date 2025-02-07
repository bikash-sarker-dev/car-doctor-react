/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
    colors: {
      "car-primary": "#FF3811",
      "car-secondary": "#737373",
      "car-info": "#F3F3F3",
      "car-review": "#FF912C",
      "car-white": "#fff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
