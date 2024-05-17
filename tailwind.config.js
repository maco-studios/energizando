/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,css}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          "50": "#fef4e6",
          "100": "#fee9cd",
          "200": "#fdd49c",
          "300": "#fbbe6a",
          "400": "#faa939",
          "500": "#f99307",
          "600": "#c77606",
          "700": "#955804",
          "800": "#643b03",
          "900": "#321d01"
        }
      }
    },
  },
  plugins: [],
}