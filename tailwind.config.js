const colors = require('tailwindcss/colors');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors : {
      primaryOrange :  "#FC8A06" ,
      primaryDark: "#03081F" ,
      secondary: "#FFA000" ,
      footerBottombg : "#03081F" ,
      whiteYellwed : "#ededbe" ,
      white : "#fff"  ,
      black : "#232220" ,
      grayLight : "#F5F5F5" ,
      pageBg  : "#9ae7f3" ,  
      grayDark : "#5E5B56" ,
      ...colors 
     }  ,
    screens: {
       "smallest":"375px",
      "xs":"457px",
      'tablet': '669px',
      'laptop': '913px',
      'desktop': '1280px',
      'largeMonitor': '1500px',
      'largestMonitor':'1900px'
      
    } 
  },
  plugins: [],
}