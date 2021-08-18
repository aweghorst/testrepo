module.exports = {
  purge: [
  //components
  './src/components/Bike/index.js', 
  './src/components/BikeList/index.js', 
  './src/components/Footer/index.js', 
  './src/components/Header/index.js', 
  './src/components/Nav/index.js',
  //pages
  './src/pages/Dashboard.js',
  './src/pages/Home.js',
  './src/pages/Login.js',
  './src/pages/NoMatch.js',
  './src/pages/Search.js',
  './src/pages/Signup.js',
  './src/pages/Tips.js',
  //public-index.html
  '../public/index.html'
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
