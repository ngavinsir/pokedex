const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans]
    },
    extend: {
      colors: {}
    }
  },
  plugins: []
}
