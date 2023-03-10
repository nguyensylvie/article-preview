/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      darkgrayishblue: "hsl(217, 19%, 35%)",
      darkblue: "hsl(214, 17%, 51%)",
      grayishblue: "hsl(212, 23%, 69%)",
      lightgrayishblue: "hsl(210, 46%, 95%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSize: {
      xs: "0.688rem",
      sm: "0.813rem",
      base: "1rem",
      lg: "1.25rem",
    },
  },
  plugins: [],
};
