// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js", // Added Flowbite path
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Added Flowbite plugin
  ],
};
