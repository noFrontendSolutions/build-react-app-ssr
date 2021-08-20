module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
//this file is required by tailwindCSS. 
//autoprefixer is a PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from "Can I Use".
//Postcss-import is a plugin that offers the ability to organize your CSS into multiple files and combine them at build time by processing @import statements in advance, instead of in the browser.
//postcss-import is that it strictly adheres to the CSS spec and disallows @import statements anywhere except at the very top of a file. 