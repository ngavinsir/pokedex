module.exports = {
  extends: ["react-app", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off"
  },
  env: {
    jest: true
  }
}
