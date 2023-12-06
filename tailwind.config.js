/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1186px",
        // => @media (min-width: 1280px) { ... }

        "big-screen": "1365px",
        // => @media (min-width: 1365px) { ... }
      },
      colors: {
        zoomBlue: "#0b5cff",
      },
      fontFamily: {
        rem: ["REM", "sans-serif"],
        sans: ['Inter', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
