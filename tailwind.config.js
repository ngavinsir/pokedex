const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans]
    },
    screens: {
      xs: "350px",
      ...defaultTheme.screens
    },
    extend: {
      colors: {}
    }
  },
  plugins: []
}
