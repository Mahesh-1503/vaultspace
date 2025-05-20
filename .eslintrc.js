module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: {
    react: require("eslint-plugin-react"),
    "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    tailwindcss: require("eslint-plugin-tailwindcss"),
    prettier: require("eslint-plugin-prettier"),
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: {
    react: "eslint-plugin-react",
    "@typescript-eslint": "eslint-plugin-ts-recommended",
    tailwindcss: "eslint-plugin-tailwindcss",
    prettier: "eslint-plugin-prettier",
  },
  rules: {
    // React rules
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "warn",

    // TypeScript rules
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

    // Tailwind rules
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/no-contradicting-classname": "error",

    // Prettier integration
    "prettier/prettier": [
      "warn",
      {
        semi: false,
        singleQuote: true,
        trailingComma: "es5",
        printWidth: 80,
        arrowParens: "always",
        endOfLine: "auto",
      },
    ],

    // General rules
    "no-console": ["warn"],
    "no-debugger": ["error"],
  },
};
