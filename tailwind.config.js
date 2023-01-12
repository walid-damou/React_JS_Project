/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BeVietnamPro: ["Be Vietnam Pro", "sans-serif"],
        Nunitu: ['Nunito', 'sans-serif']
      },
      colors:
      {
        mainColor:"#a12047",
        darkColor:"#761834",
        lightColor:"#db4c77",
        greyColor:"#e6e6e6",
        darkGrey:"#2D2D2D",

      },
      boxShadow: {
        '3xl': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      },
      backgroundImage: {
        'qatarGraphic1': "url('/src/assets/images/qatarGraphic1.jpg')",
        'qatarGraphic2': "url('/src/assets/images/qatarGraphic2.jpg')",
        'qatar2':"url('/src/assets/images/qatar2.jpg')",
        'qatar3':"url('/src/assets/images/qatar3.jpg')",
        'qatar4':"url('/src/assets/images/qatar4.jpg')",
        'qatar5':"url('/src/assets/images/qatar5.jpg')",
        'placeBG':"url('/src/assets/images/placesbg.png')",




        
      },
    },
  },
  plugins: [],
}
