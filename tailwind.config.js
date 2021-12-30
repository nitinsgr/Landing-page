module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary_color': "#4134ff",
        'secondary_color' : "#f0ff1d",
      },
      fontFamily: {
        'Bowlby': ['Bowlby one'],
        'Krona': ['Krona one'],
        'SFDisplay': ['SF Pro Display'],
      },
      backgroundImage : theme => ({
        'BannerBackground': "url('../images/Untitled-1.png')",
        'bannerBackground2': "url('../images/clouds.jpg')",
        'newBackground': "url('../images/newBackground.jpg')",
        'AdobeImage': "url('../images/Adobe1.png')",
        'downloadImage': "url('../images/downloadbackground.png')",
        'journeyImage' : "url('../images/10.png')",
      })

    },
  },
  plugins: [],
}
