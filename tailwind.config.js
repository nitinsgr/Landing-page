module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Bowlby': ['Bowlby one'],
        'Krona': ['Krona one'],
      },
      backgroundImage : theme => ({
        'BannerBackground': "url('../images/clouds.jpg')"
      })

    },
  },
  plugins: [],
}
