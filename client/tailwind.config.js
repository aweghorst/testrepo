module.exports = {
  purge: [
  //components
  './src/components/Footer/index.js', 
  './src/components/Header/index.js', 
  './src/components/Nav/index.js',
  './src/components/AddBike/index.js',
  './src/components/BikeMessage/index.js',
  './src/components/EditBike/index.js',
  './src/components/LoginForm/index.js',
  './src/components/MessageForm/index.js',
  './src/components/SearchBike/index.js',
  './src/components/Signup/index.js',
  './src/components/UserBike/index.js',
  //pages
  './src/pages/Dashboard.js',
  './src/pages/Home.js',
  './src/pages/Login.js',
  './src/pages/NoMatch.js',
  './src/pages/Search.js',
  './src/pages/Signup.js',
  './src/pages/Tips.js',
  './src/pages/Message.js',
  '.src/pages/ViewMessage.js',
  './src/pages/Success.js',
  //public-index.html
  './public/index.html'
],
  darkMode: 'media', // or 'media' or 'class', or false
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}
