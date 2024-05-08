/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'xxl': '1920px'
      },
      maxWidth: {
        'container': '1780px',
      },
      colors: {
        'primary': '#171717',
        'secondary': '#D2FF3A',
        'brand': '#28282A',
      },
      backgroundImage: {
        'evoked': 'url(../public/assets/evoked.png)',
        'hero': 'url(../public/assets/bannerMobile.png)'
      },
      fontFamily:{
        primary: ['var(--font-josefin)'],
      },
    },
  },
  plugins: [],
  darkMode: "class",
  
};
