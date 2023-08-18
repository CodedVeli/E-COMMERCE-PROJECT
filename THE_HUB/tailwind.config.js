/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  
    extend: {
      fontFamily:{
        Anton : ['Anton', 'sans-serif'],
        Berkshire : ['Berkshire Swash', 'cursive'],
        Castoro : ['Castoro', 'serif']

      }
    },
  },
  plugins: [],
}

