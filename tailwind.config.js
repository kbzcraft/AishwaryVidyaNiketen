/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   ],
  theme: {
    extend: {
      colors: {
        primary: "#1d5ab6",
        secondary: "#ffb546",
      },
      fontFamily: {
        primary: [    'Lexend Exa', 'sans-serif'],
        secondary: ['Lato', 'sans-serif'],
        ceviche: ['Ceviche One', 'cursive'],
        pessero : ['Passero One', 'cursive'],
        arvo : ['Arvo', 'serif'],
      },
      screens:{
        'xs': "360px",
        'xxs': "400px",
        '2xs':"300px",
        'mdx':"720px"
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          },  
        },
        skeleton:{
          "0%" :{
            backgroundColor: "hsl(200, 20%, 80%)"
          },
          "100%": {
            backgroundColor: "hsl(200, 20%, 95%)"
          },
        }
      },
      animation:{
        'spin-slow' : "spin 3s linear infinite",
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
      backgroundImage: theme => ({
          'electrocuted': "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
        })
      
    },
  },
  plugins: [],
}

