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
    "max-len": [1, 120, 2],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "never"],
    "eol-last": ["error", "always"],
    "no-unused-vars": ["error"],
    "no-trailing-spaces": ["error"],
    "no-console": ["error"],
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
