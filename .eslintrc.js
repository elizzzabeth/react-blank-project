// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "indent": ["warn", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["warn", "double"],
    "semi": ["warn", "never"],
    "eol-last": ["warn", "always"],
    "no-unused-vars": ["warn"],
    "no-trailing-spaces": ["warn"],
    "no-console": ["warn"],
    "react/prop-types": 0,
    "prefer-destructuring": ["error", {"object": true, "array": true}],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": false
      }
    ],
  }
}
