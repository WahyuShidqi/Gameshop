/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkorange: "rgba(232, 166, 97, 0.30)",
        brightorange: "#E87D0E",
        darkpurple: "rgba(255, 255, 255, 0.11)",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
