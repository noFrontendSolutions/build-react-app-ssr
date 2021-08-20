module.exports = {
  mode: "jit",
  purge: ['./src/**/*.html',
          './src/**/*.js',
          './src/**/*.ts',
          './src/**/*.jsx',
          './src/**/*.tsx'
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

//this file is required by tailwind. See excellent tailwind documentation if you want to extend colors, fonts, etc...
//mode: "jit": activates the new just-in-time compiler. Without jit the build css file will not be minimized.