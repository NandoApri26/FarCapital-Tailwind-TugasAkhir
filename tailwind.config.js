/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./node_modules/flowbite/dist/flowbite.js"],
  theme: {
    container: {
      screens: {
        xl: "1284px",
      },
      center:true,
    },
    extend: {
      fontFamily: {
        inter : ["Inter"],
        poopins : ["Poopins"],
      },
      spacing: {
        2.5 : "10px",
        4.5 : "18px",
        12.5 : "46px",
        21 : "84px",
        30.5 : "122px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}