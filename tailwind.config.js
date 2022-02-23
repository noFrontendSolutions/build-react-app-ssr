module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
    "./template/index.html",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        reactGray: "#1F232A",
        reactBlue: "#60DAF8",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
}

//this file is required by tailwind. See excellent tailwind documentation if you want to extend colors, fonts, etc...
//mode: "jit": activates the new just-in-time compiler. Without jit the build css file will not be minimized.
